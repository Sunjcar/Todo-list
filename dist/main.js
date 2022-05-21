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

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createProject = () => {\n    //Cache Dom\n    const ProjectContainer = document.querySelector('.project-list')\n    const newProjectForm = document.querySelector('.form')\n    const newProjectInput = document.querySelector('.title')\n    const modal = document.getElementById('modal')\n    const listDisplayContainer = document.querySelector('.view-project')\n    const listTitleElement = document.querySelector('.project-name')\n    const listCountElement = document.querySelector('.task-count')\n    const tasksContainer = document.querySelector('.task-container')\n    const taskTemplate = document.getElementById('task-template')\n    const newTaskForm = document.querySelector('.task-form')\n    const newTaskInput = document.querySelector('.new-task')\n    const addContent = document.querySelector('.add-content')\n    const clearCompleteTasksButton = document.querySelector('.delete')\n    const todayContent = document.querySelector('.today-content')\n    const todayContainer = document.querySelector('.today-list')\n    const newTodayForm = document.querySelector('.todayForm')\n    const newTodayInput = document.querySelector('.today-input')\n\n\n    clearCompleteTasksButton.style.display = 'none'\n    newTaskInput.style.display = 'none'\n\n    //Saves Data to local storage\n    const LOCAL_STORAGE_LIST_KEY = 'task.lists'\n    const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'\n    const LOCAL_STORAGE_TODAY_LIST_KEY = 'today.lists'\n    let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []\n    let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)\n    let todaylists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODAY_LIST_KEY)) || []\n\n    //Bind Events\n    todayContent.addEventListener('click', () => {\n        newTodayInput.style.display = 'inline'\n        todayContainer.style.display = 'inline'\n    })\n\n    ProjectContainer.addEventListener('click', e => {\n        if (e.target.tagName.toLowerCase() === 'li') {\n        selectedListId = e.target.dataset.listId\n        saveAndRender()\n        }\n    })\n    \n    tasksContainer.addEventListener('click', e => {\n        if (e.target.tagName.toLowerCase() === 'input') {\n        const selectedList = lists.find(list => list.id === selectedListId)\n        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)\n        selectedTask.complete = e.target.checked\n        save()\n        }\n    })\n    \n    clearCompleteTasksButton.addEventListener('click', e => {\n        const selectedList = lists.find(list => list.id === selectedListId)\n        selectedList.tasks = selectedList.tasks.filter(task => !task.complete)\n        saveAndRender()\n    })\n    \n    newTodayForm.addEventListener('submit', e => {\n        e.preventDefault()\n        newTodayInput.style.display = 'none'\n        const listName = newTodayInput.value\n        if (listName == null || listName === '') return\n        const list = createList(listName)\n        newTodayInput.value = null\n        todaylists.push(list)\n        saveAndRenderToday()\n    })\n    \n    newProjectForm.addEventListener('submit', e => {\n        e.preventDefault()\n        modal.style.display = 'none'\n        const listName = newProjectInput.value\n        if (listName == null || listName === '') return\n        const list = createList(listName)\n        newProjectInput.value = null\n        lists.push(list)\n        saveAndRender()\n        \n    })\n    \n    \n    newTaskForm.addEventListener('submit', e => {\n        e.preventDefault()\n        const taskName = newTaskInput.value\n        if (taskName == null || taskName === '') return\n        const task = createTask(taskName)\n        newTaskInput.value = null\n        const selectedList = lists.find(list => list.id === selectedListId)\n        selectedList.tasks.push(task)\n        saveAndRender()\n    })\n    \n    //Displays Modal\n    addContent.addEventListener('click', () => {\n        console.log('hello')\n        modal.style.display = 'block'\n      })\n    //Creates Unique ID and Task array for tasks\n    function createList(name) {\n        return { id: Date.now().toString(), name: name, tasks: [] }\n    }\n    \n    function createTask(name) {\n        return { id: Date.now().toString(), name: name}\n    }\n    function saveAndRenderToday(){\n        save()\n        renderToday()\n    }\n\n    function saveAndRender() {\n        save()\n        render()\n    }\n    \n    function save() {\n        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))\n        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)\n        localStorage.setItem(LOCAL_STORAGE_TODAY_LIST_KEY, JSON.stringify(todaylists))\n    }\n\n    function renderToday (){\n        clearElement(todayContainer)\n        renderTodayLists()\n    \n        const selectedList = todaylists.find(list => list.id === selectedListId)\n        if (selectedListId == null) {\n        listDisplayContainer.style.display = 'none'\n        listTitleElement.textContent = 'Tasks'\n        newTaskInput.style.display = 'none'\n        clearCompleteTasksButton.style.display = 'none'\n        } else {\n        listDisplayContainer.style.display = ''\n        listTitleElement.innerText = selectedList.name\n        newTaskInput.style.display = 'inline'\n        clearCompleteTasksButton.style.display = 'inline'\n        tasksContainer.style.display = 'inline'\n        clearElement(tasksContainer)\n        renderTasks(selectedList)\n        }\n    }\n    \n    function render() {\n        clearElement(ProjectContainer)\n        renderLists()\n    \n        const selectedList = lists.find(list => list.id === selectedListId)\n        if (selectedListId == null) {\n        listDisplayContainer.style.display = 'none'\n        listTitleElement.textContent = 'Tasks'\n        newTaskInput.style.display = 'none'\n        clearCompleteTasksButton.style.display = 'none'\n        } else {\n        listDisplayContainer.style.display = ''\n        listTitleElement.innerText = selectedList.name\n        newTaskInput.style.display = 'inline'\n        clearCompleteTasksButton.style.display = 'inline'\n        tasksContainer.style.display = 'inline'\n        clearElement(tasksContainer)\n        renderTasks(selectedList)\n        }\n    }\n    \n    function renderTasks(selectedList) {\n        selectedList.tasks.forEach(task => {\n        const taskCount = document.createElement('p')\n        const taskList =document.createElement('div')\n        taskList.classList.add('task-lists')\n        tasksContainer.appendChild(taskCount)\n        tasksContainer.appendChild(taskList)\n        const left = document.createElement('div')\n        left.classList.add('left-task')\n        const right = document.createElement('div')\n        right.classList.add('right-task')\n        taskList.appendChild(left)\n        taskList.appendChild(right)\n        const icon = document.createElement('span')\n        icon.classList.add('material-symbols-outlined')\n        icon.textContent = 'tips_and_updates'\n        const dateInput = document.createElement('input')\n        dateInput.classList.add('date')\n        dateInput.setAttribute('type', 'date')\n        right.appendChild(dateInput);\n        const taskElement = document.importNode(taskTemplate.content, true)\n        const checkbox = taskElement.querySelector('input')\n        checkbox.id = task.id\n        checkbox.checked = task.complete\n        const label = taskElement.querySelector('label')\n        label.htmlFor = task.id\n        label.append(task.name)\n        left.appendChild(icon)\n        left.appendChild(taskElement)\n        })\n    }\n\n    function renderTodayLists() {\n        todaylists.forEach(list => {\n        const today = document.createElement('div')\n        today.classList.add('lists')\n        todayContainer.appendChild(today)\n        const left = document.createElement('div')\n        left.classList.add('left-list')\n        const right = document.createElement('div')\n        right.classList.add('right-list')\n        today.appendChild(left)\n        today.appendChild(right)\n        const remove = document.createElement('span')\n        remove.classList.add('material-symbols-outlined')\n        remove.textContent = 'delete'\n        left.appendChild(remove)\n        remove.addEventListener('click', e => {\n            if (todaylists.length > 1) {\n            todaylists.splice(todaylists.indexOf(list), 1);\n            saveAndRenderToday()\n            newTaskInput.style.display = 'none'\n            clearCompleteTasksButton.style.display = 'none'\n            tasksContainer.style.display = 'none'\n            listCountElement.style.display = 'none'\n        } else if (todaylists.length === 1) {\n            todaylists = [];\n            todayContainer.textContent = ''\n            listTitleElement.textContent = 'Tasks'\n            newTaskInput.style.display = 'none'\n            clearCompleteTasksButton.style.display = 'none'\n            tasksContainer.style.display = 'none'\n            listCountElement.style.display = 'none'\n            saveAndRenderToday();\n        }\n        })\n        \n        const icon = document.createElement('span')\n        icon.classList.add('material-symbols-outlined')\n        icon.textContent = 'receipt_long'\n        const listElement = document.createElement('li')\n        listElement.dataset.listId = list.id\n        listElement.classList.add(\"list\")\n        listElement.textContent = list.name\n        if (list.id === selectedListId) {\n            listElement.classList.add('active')\n        }\n        right.appendChild(icon)\n        right.appendChild(listElement)\n        })\n    }\n    \n    function renderLists() {\n        lists.forEach(list => {\n        const project = document.createElement('div')\n        project.classList.add('lists')\n        ProjectContainer.appendChild(project)\n        const left = document.createElement('div')\n        left.classList.add('left-list')\n        const right = document.createElement('div')\n        right.classList.add('right-list')\n        project.appendChild(left)\n        project.appendChild(right)\n        const remove = document.createElement('span')\n        remove.classList.add('material-symbols-outlined')\n        remove.textContent = 'delete'\n        left.appendChild(remove)\n        remove.addEventListener('click', e => {\n            if (lists.length > 1) {\n            lists.splice(lists.indexOf(list), 1);\n            saveAndRender()\n            newTaskInput.style.display = 'none'\n            clearCompleteTasksButton.style.display = 'none'\n            tasksContainer.style.display = 'none'\n            listCountElement.style.display = 'none'\n        } else if (lists.length === 1) {\n            lists = [];\n            ProjectContainer.textContent = ''\n            listTitleElement.textContent = 'Tasks'\n            newTaskInput.style.display = 'none'\n            clearCompleteTasksButton.style.display = 'none'\n            tasksContainer.style.display = 'none'\n            listCountElement.style.display = 'none'\n            saveAndRender();\n        }\n        })\n        \n        const icon = document.createElement('span')\n        icon.classList.add('material-symbols-outlined')\n        icon.textContent = 'receipt_long'\n        const listElement = document.createElement('li')\n        listElement.dataset.listId = list.id\n        listElement.classList.add(\"list\")\n        listElement.textContent = list.name\n        if (list.id === selectedListId) {\n            listElement.classList.add('active')\n        }\n        right.appendChild(icon)\n        right.appendChild(listElement)\n        })\n    }\n    \n    function clearElement(element) {\n        while (element.firstChild) {\n        element.removeChild(element.firstChild)\n        }\n    }\n    \n    render() \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\n    //Creates Header Elements \n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const span = document.createElement('span');\n    span.classList.add(\"material-symbols-outlined\");\n    span.textContent = 'edit_calendar'\n    \n    const headText = document.createElement('div');\n    headText.classList.add('head-text');\n    headText.textContent = 'To-Do List';\n\n    document.body.appendChild(header);\n    header.appendChild(span);\n    header.appendChild(headText);\n\n}; \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://todo-list/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n\n\n\n\n\nfunction renderModules(){\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.projectTask)();\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.modal)();\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}renderModules();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"projectTask\": () => (/* binding */ projectTask)\n/* harmony export */ });\n\n\nconst modal = () => {\n    //Creat Dom For Projects     \n    const modal = document.createElement('div')\n    modal.classList.add('modal')\n    modal.setAttribute('id', 'modal')\n    const modalContent = document.createElement('div');\n    modalContent.classList.add('modal-content');\n    \n    const form = document.createElement('form');\n    form.classList = ('form')\n    form.setAttribute('data','new-project-form')\n\n    const titleInput = document.createElement('input')\n    titleInput.classList.add('title')\n    titleInput.setAttribute('type', 'text')\n    titleInput.setAttribute('id', 'title')\n    \n    //Append Elements\n    document.body.appendChild(modal)\n    modal.appendChild(modalContent);\n    modalContent.appendChild(form)\n    form.appendChild(titleInput);\n\n   \n};    \nconst projectTask = () => {\n   \n    //Create Div that displays project tasks\n    const main = document.getElementById('main')\n    const div = document.createElement('div');\n    div.classList.add('view-project')\n    const tasksContainer = document.createElement('div');\n    tasksContainer.classList.add('task-container')\n    const name = document.createElement('h1')\n    name.classList.add('project-name')\n    const taskBody = document.createElement('div')\n    taskBody.classList.add('task-body')\n    const tasks = document.createElement('div')\n    tasks.classList.add('tasks')\n    const deleteBtn = document.createElement('button')\n    deleteBtn.classList.add('delete')\n    deleteBtn.textContent = 'Clear Completed Tasks'\n\n    //Creates container and form input for tasks\n    const taskCreator = document.createElement('div')\n    taskCreator.classList.add('task-creator')\n    const taskForm = document.createElement('form')\n    taskForm.classList.add('task-form')\n    const taskInput = document.createElement('input')\n    taskInput.classList.add('new-task')\n\n    main.appendChild(div);\n    div.appendChild(tasksContainer);\n    div.appendChild(taskBody)\n    tasksContainer.appendChild(name)\n    taskBody.appendChild(tasks)\n    taskBody.appendChild(taskCreator)\n    taskBody.appendChild(deleteBtn)\n    taskCreator.appendChild(taskForm)\n    taskForm.appendChild(taskInput)\n    };\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sidebar = () => {\n    //Create Sidebar Elements\n    const main = document.createElement('div')\n    main.setAttribute('id', 'main')\n    const sidebar = document.createElement('div');\n    sidebar.classList.add('sidebar');\n    //Container for styling\n    const dayContent = document.createElement('div')\n    dayContent.classList.add('content')\n    const weekContent = document.createElement('div')\n    weekContent.classList.add('content')\n    const projectContent = document.createElement('div')\n    projectContent.classList.add('content')\n    const addContent = document.createElement('div');\n    addContent.classList.add('add-content')\n    addContent.setAttribute('id', 'add-project')\n    //Content\n    const todayContent = document.createElement('div')\n    todayContent.classList.add('today-content')\n    const today = document.createElement('div');\n    today.classList.add('today');\n    today.textContent = 'Today'\n    const todayIcon = document.createElement('span');\n    todayIcon.classList.add(\"material-symbols-outlined\")\n    todayIcon.textContent = 'calendar_today'\n    const todayContainer = document.createElement('div')\n    todayContainer.classList.add('today-list')\n\n    //Creat Dom For Today   \n    const todayCreator = document.createElement('div') \n    todayCreator.classList.add('today-creator') \n    const todayForm = document.createElement('form')\n    todayForm.classList.add('todayForm')\n    const todayInput = document.createElement('input')\n    todayInput.classList.add('today-input')\n    todayInput.style.display = 'none'\n\n    const week = document.createElement('div');\n    week.classList.add('week');\n    week.textContent = 'Week'\n\n\n    const weekIcon = document.createElement('span');\n    weekIcon.classList.add(\"material-symbols-outlined\")\n    weekIcon.textContent = 'date_range'\n\n    const projects = document.createElement('div')\n    projects.classList.add('projects')\n    projects.textContent = 'Projects'\n\n    const projectLists = document.createElement('div')\n    projectLists.classList.add('project-list')\n\n    const addIcon = document.createElement('span')\n    addIcon.classList.add(\"material-symbols-outlined\")\n    addIcon.textContent = 'add'\n\n    const addproject = document.createElement('div')\n    addproject.classList.add('add-project')\n    addproject.textContent = \"Add Project\"\n\n    document.body.appendChild(main);\n    main.appendChild(sidebar);\n    sidebar.appendChild(dayContent);\n    sidebar.appendChild(weekContent);\n    sidebar.appendChild(projectContent);\n    sidebar.appendChild(addContent)\n    dayContent.appendChild(todayContent)\n    todayContent.appendChild(todayIcon);\n    todayContent.appendChild(today);\n    today.appendChild(todayContainer)\n    today.appendChild(todayCreator)\n    todayCreator.appendChild(todayForm)\n    todayForm.appendChild(todayInput)\n    weekContent.appendChild(weekIcon);\n    weekContent.appendChild(week);\n    projects.appendChild(projectLists)\n    projectContent.appendChild(projects);\n    addContent.appendChild(addIcon)\n    addContent.appendChild(addproject)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);\n\n//# sourceURL=webpack://todo-list/./src/sidebar.js?");

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