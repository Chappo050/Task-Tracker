/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
 





const saveString = 'savedItems';

//loop through all items in the array and create (but not make new objects)
function createAllItems(array){
    array.forEach(item => {
        console.log("hello")
        createItemsFromStorage(item);
    });  
    }

function createItemsFromStorage(item){
    const title = item.title;
    const status = item.status;
    const description = item.description;
    const due = item.due;
    const priority = item.priority;
    const note = item.note;
    const priorityValue = handlePriority(priority.value);

    let array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects();

    console.log(title)
    var newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title, status, description, due, priorityValue, note);
    array.push(newItem);
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedProjects(saveString, array);


    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(array);
    console.log(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects());
}

function createNewItem() {

    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
    const priorityValue = handlePriority(priority.value);

    let array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects();
    
    //create new object using the form

    console.log(title)
    var newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value);
    array.push(newItem);
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedProjects(saveString, array);


    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(array);
    console.log(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects());
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

function deleteItem(title){
    const array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getItems();
    const removeTitle = array.findIndex( item => item.title === title );
    console.log(`deleting item ${title}`)

    // remove object
    console.log(array.length);
    array.splice( removeTitle, 1 );
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedProjects(saveString, array)
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
/* harmony export */   "closeForm": () => (/* binding */ closeForm)
/* harmony export */ });
/* harmony import */ var _savingStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savingStorage */ "./src/savingStorage.js");
/* harmony import */ var _addItemFormManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItemFormManager */ "./src/addItemFormManager.js");



function loadButtons() {
    const addItemBtn = document.getElementById('addItemBtn')
    addItemBtn.addEventListener('click', () => ((0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_1__.createNewItem)(_savingStorage__WEBPACK_IMPORTED_MODULE_0__.getItems(), true)) )

    const popupAdd = document.getElementById('popupAdd')
    popupAdd.addEventListener('click', openForm);

    const closeBtn = document.getElementById('closeBtn')
    closeBtn.addEventListener('click', closeForm);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";

  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 




/***/ }),

/***/ "./src/savingStorage.js":
/*!******************************!*\
  !*** ./src/savingStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setSavedProjects": () => (/* binding */ setSavedProjects),
/* harmony export */   "getSavedProjects": () => (/* binding */ getSavedProjects),
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

function setSavedProjects(string, array) {
    if (array) {
        localStorage.setObj(string, array) //Key is not the obj key but the key to save shit under
        };
}

function getSavedProjects(string) {

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
    btn.onclick = function(){;(0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(btn.title)}
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/TDObj.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1RET2JqLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9hZGRJdGVtRm9ybU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2J0bkxvZ2ljLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zYXZpbmdTdG9yYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy91cGRhdGVET00uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVsZXRlSXRlbX0gZnJvbSBcIi4vYWRkSXRlbUZvcm1NYW5hZ2VyXCJcblxuZnVuY3Rpb24gUHJvamVjdExpc3QobmFtZSwgaXRlbXMpe1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5hZGRJdGVtID0gKG5ld0l0ZW0pID0+IGl0ZW1zLnB1c2gobmV3SXRlbSk7XG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiBUb0RvKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3RlKXtcbiAgICAgICBcbiAgICAgIC8vIGNvbnN0IG9iaiA9IHRoaXM7XG4gICAgICAgXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuXG4vKlxuICAgICAgICAvLyBXaXRoaW4gdGhlIGZ1bmN0aW9uLCB1c2Ugb2JqIHRvIHJlZmVyZW5jZSB0aGUgaW5zdGFuY2UsIG5vdCB0aGlzXG4gICAgICAgIHRoaXMuY3JlYXRlQnRuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYnRuLnR5cGUgPSAnYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGJ0bi50aXRsZSA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbShidG4udGl0bGUpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBidG47XG4gICAgICB9O1xuKi9cbn1cbmV4cG9ydCB7UHJvamVjdExpc3QsIFRvRG99IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RET2JqXCI7IFxuaW1wb3J0IHtyZWZyZXNoRGlzcGxheX0gZnJvbSBcIi4vdXBkYXRlRE9NXCI7XG5pbXBvcnQge2Nsb3NlRm9ybX0gZnJvbSBcIi4vYnRuTG9naWNcIjtcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9zYXZpbmdTdG9yYWdlJztcblxuXG5jb25zdCBzYXZlU3RyaW5nID0gJ3NhdmVkSXRlbXMnO1xuXG4vL2xvb3AgdGhyb3VnaCBhbGwgaXRlbXMgaW4gdGhlIGFycmF5IGFuZCBjcmVhdGUgKGJ1dCBub3QgbWFrZSBuZXcgb2JqZWN0cylcbmZ1bmN0aW9uIGNyZWF0ZUFsbEl0ZW1zKGFycmF5KXtcbiAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAgIGNyZWF0ZUl0ZW1zRnJvbVN0b3JhZ2UoaXRlbSk7XG4gICAgfSk7ICBcbiAgICB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1zRnJvbVN0b3JhZ2UoaXRlbSl7XG4gICAgY29uc3QgdGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgIGNvbnN0IHN0YXR1cyA9IGl0ZW0uc3RhdHVzO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBkdWUgPSBpdGVtLmR1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGl0ZW0ucHJpb3JpdHk7XG4gICAgY29uc3Qgbm90ZSA9IGl0ZW0ubm90ZTtcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gaGFuZGxlUHJpb3JpdHkocHJpb3JpdHkudmFsdWUpO1xuXG4gICAgbGV0IGFycmF5ID0gc3RvcmFnZS5nZXRTYXZlZFByb2plY3RzKCk7XG5cbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgICB2YXIgbmV3SXRlbSA9IG5ldyBUb0RvKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5VmFsdWUsIG5vdGUpO1xuICAgIGFycmF5LnB1c2gobmV3SXRlbSk7XG4gICAgc3RvcmFnZS5zZXRTYXZlZFByb2plY3RzKHNhdmVTdHJpbmcsIGFycmF5KTtcblxuXG4gICAgcmVmcmVzaERpc3BsYXkoYXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3SXRlbSgpIHtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpdGxlJylbMF07XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3N0YXR1cycpWzBdO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2Rlc2MnKVswXTtcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnZHVlJylbMF07XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKVswXTtcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ25vdGVzJylbMF07XG4gICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGhhbmRsZVByaW9yaXR5KHByaW9yaXR5LnZhbHVlKTtcblxuICAgIGxldCBhcnJheSA9IHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpO1xuICAgIFxuICAgIC8vY3JlYXRlIG5ldyBvYmplY3QgdXNpbmcgdGhlIGZvcm1cblxuICAgIGNvbnNvbGUubG9nKHRpdGxlKVxuICAgIHZhciBuZXdJdGVtID0gbmV3IFRvRG8odGl0bGUudmFsdWUsIHN0YXR1cy52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZS52YWx1ZSwgcHJpb3JpdHlWYWx1ZSwgbm90ZS52YWx1ZSk7XG4gICAgYXJyYXkucHVzaChuZXdJdGVtKTtcbiAgICBzdG9yYWdlLnNldFNhdmVkUHJvamVjdHMoc2F2ZVN0cmluZywgYXJyYXkpO1xuXG5cbiAgICByZWZyZXNoRGlzcGxheShhcnJheSk7XG4gICAgY29uc29sZS5sb2coc3RvcmFnZS5nZXRTYXZlZFByb2plY3RzKCkpO1xuICAgIGNsZWFyRm9ybSh0aXRsZSwgc3RhdHVzLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZSk7XG59XG5cblxuZnVuY3Rpb24gY2xlYXJGb3JtKHRpdGxlLCBzdGF0dXMsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGUpe1xuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgc3RhdHVzLnZhbHVlID0gJyc7IFxuICAgIGRlc2MudmFsdWUgPSAnJzsgXG4gICAgZHVlLnZhbHVlID0gJyc7IFxuICAgIHByaW9yaXR5LnZhbHVlID0gJyc7XG4gICAgbm90ZS52YWx1ZSA9ICcnO1xuICAgIGNsb3NlRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmlvcml0eSh2YWx1ZSl7XG4gICAgaWYgKHZhbHVlID09IDApIHtyZXR1cm4gXCJMT1dcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAxKSB7cmV0dXJuXCJNRURcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAyKSB7cmV0dXJuIFwiSElHSFwifVxufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtKHRpdGxlKXtcbiAgICBjb25zdCBhcnJheSA9IHN0b3JhZ2UuZ2V0SXRlbXMoKTtcbiAgICBjb25zdCByZW1vdmVUaXRsZSA9IGFycmF5LmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aXRsZSApO1xuICAgIGNvbnNvbGUubG9nKGBkZWxldGluZyBpdGVtICR7dGl0bGV9YClcblxuICAgIC8vIHJlbW92ZSBvYmplY3RcbiAgICBjb25zb2xlLmxvZyhhcnJheS5sZW5ndGgpO1xuICAgIGFycmF5LnNwbGljZSggcmVtb3ZlVGl0bGUsIDEgKTtcbiAgICBzdG9yYWdlLnNldFNhdmVkUHJvamVjdHMoc2F2ZVN0cmluZywgYXJyYXkpXG4gICAgY29uc29sZS5sb2coYXJyYXkubGVuZ3RoKTtcbiAgICByZWZyZXNoRGlzcGxheShhcnJheSlcbn1cblxuXG5leHBvcnQge2NyZWF0ZU5ld0l0ZW0sIGRlbGV0ZUl0ZW0sIGNyZWF0ZUFsbEl0ZW1zfSIsImltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9zYXZpbmdTdG9yYWdlJztcbmltcG9ydCB7Y3JlYXRlTmV3SXRlbX0gZnJvbSAnLi9hZGRJdGVtRm9ybU1hbmFnZXInO1xuXG5mdW5jdGlvbiBsb2FkQnV0dG9ucygpIHtcbiAgICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEl0ZW1CdG4nKVxuICAgIGFkZEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiAoY3JlYXRlTmV3SXRlbShzdG9yYWdlLmdldEl0ZW1zKCksIHRydWUpKSApXG5cbiAgICBjb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cEFkZCcpXG4gICAgcG9wdXBBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ0bicpXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xufVxuXG5mdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gXG5cblxuZXhwb3J0IHtsb2FkQnV0dG9ucywgY2xvc2VGb3JtfSIsImxldCBpdGVtQXJyYXkgPSBbXTtcbmxldCBwcm9qZWN0QXJyYXkgPSBbXVxuXG4vL1N0b2xlbiBjb2RlIHRoYXQgYWxsb3dzIHRoZSBzYXZpbmcgb2Ygb2JqZWN0cyB0byBsb2NhbCBzdG9yYWdlXG5TdG9yYWdlLnByb3RvdHlwZS5zZXRPYmogPSBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHJldHVybiB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxufVxuLy9TdG9sZW4gY29kZSB0aGF0IGFsbG93cyB0aGUgZ2V0dGluZyBvZiBvYmplY3RzIHRvIGxvY2FsIHN0b3JhZ2VcblN0b3JhZ2UucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuZ2V0SXRlbShrZXkpKVxufVxuXG5mdW5jdGlvbiBzZXRTYXZlZFByb2plY3RzKHN0cmluZywgYXJyYXkpIHtcbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldE9iaihzdHJpbmcsIGFycmF5KSAvL0tleSBpcyBub3QgdGhlIG9iaiBrZXkgYnV0IHRoZSBrZXkgdG8gc2F2ZSBzaGl0IHVuZGVyXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFNhdmVkUHJvamVjdHMoc3RyaW5nKSB7XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldE9iaihzdHJpbmcpKXtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRPYmooc3RyaW5nKTtcbiAgICB9XG5cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gaXRlbUFycmF5O1xuICAgIH1cbiAvL0FjY2VzIHRoZSBrZXkgdGhlIGxpYnJhcnkgaGFzIGJlZW4gc2F2ZWQgdG9cbn1cblxuZnVuY3Rpb24gZ2V0SXRlbXMoKXtcbiAgICByZXR1cm4gaXRlbUFycmF5XG59XG5cblxuZnVuY3Rpb24gc2V0SXRlbXMoYXJyYXkpe1xuICAgIGl0ZW1BcnJheSA9IGFycmF5O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpe1xuICAgIHJldHVybiBwcm9qZWN0QXJyYXlcbn1cblxuZnVuY3Rpb24gc2V0UHJvamVjdHMoYXJyYXkpe1xuICAgIHByb2plY3RBcnJheSA9IGFycmF5O1xufVxuXG5cbmV4cG9ydCB7c2V0U2F2ZWRQcm9qZWN0cywgZ2V0U2F2ZWRQcm9qZWN0cywgZ2V0SXRlbXMsIGdldFByb2plY3RzLCBzZXRJdGVtcywgc2V0UHJvamVjdHN9IiwiaW1wb3J0IHsgZGVsZXRlSXRlbSB9IGZyb20gXCIuL2FkZEl0ZW1Gb3JtTWFuYWdlclwiO1xuXG5mdW5jdGlvbiByZWZyZXNoRGlzcGxheShhcnJheSkge1xuICAgIGRpc3BsYXlURChhcnJheSk7XG4gICAgY29uc29sZS5sb2coJ2FkZGVkJyk7XG59XG5cbi8vQWRkcyBhIG5ldyB0byBkbyBjYXJkIHRvIHRoZSBjdXJyZW50IHByb2plY3RcbmZ1bmN0aW9uIGRpc3BsYXlURChhcnJheSkge1xuXG4gICAgLy9jbGVhciBhbGwgaXRlbXNcbiAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Db250YWluZXInKTtcbiAgICBjb25zdCBkb2luZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2luZ0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRvbmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uZUNvbnRhaW5lcicpO1xuXG4gICAgY2xlYXJuQ29udGFpbmVycyh0b0RvQ29udGFpbmVyLCBkb2luZ0NvbnRhaW5lciwgZG9uZUNvbnRhaW5lcik7XG5cbiAgICAvL2FkZCBhbGwgaXRlbXMgYmFjayBpblxuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgIFxuICAgICAgICAvL0l0ZW1zIGRpdlxuICAgICAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NhcmQuY2xhc3NMaXN0LmFkZCgnVERJdGVtJyk7XG5cbiAgICAgICAgLy9BZGQgZWFjaCBzZWN0aW9uIG9mIHRoZSBuZXcgaXRlbSBpbnNpZGUgdGhlaXIgb3duIGRpdnNcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1UaXRsZS5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EZXNjLmlubmVySFRNTCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgaXRlbUR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRHVlLmlubmVySFRNTCA9IGVsZW1lbnQuZHVlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtUHJpb3JpdHkuaW5uZXJIVE1MID0gZWxlbWVudC5wcmlvcml0eTtcblxuICAgICAgICBjb25zdCBpdGVtTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtTm90ZS5pbm5lckhUTUwgPSBlbGVtZW50Lm5vdGU7XG5cblxuXG4gXG5cbiAgICAgICAgY29uc3QgaXRlbUJ0biA9IGNyZWF0ZUJ1dHRvbihlbGVtZW50KTtcbiAgICAgICAgICAgIGl0ZW1CdG4uaW5uZXJIVE1MID0gJy0nXG4gICAgICAgICAgICBpdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUl0ZW1CdG4nKTtcblxuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1CdG4pO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1EdWUpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbU5vdGUpO1xuXG5cbiAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09IDApe1xuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc3RhdHVzID09IDEpe1xuICAgICAgICAgICAgZG9pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50LnN0YXR1cyA9PSAyKXtcbiAgICAgICAgICAgIGRvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH0pO1xuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGVsZW1lbnQpe1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnRuLnRpdGxlID0gZWxlbWVudC50aXRsZTtcbiAgICBjb25zb2xlLmxvZyhidG4udGl0bGUpXG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe2RlbGV0ZUl0ZW0oYnRuLnRpdGxlKX1cbiAgICByZXR1cm4gYnRuO1xufVxuXG5cbmZ1bmN0aW9uIGNsZWFybkNvbnRhaW5lcnModG9kbywgZG9pbmcsIGRvbmUpIHtcbiAgICB3aGlsZSAodG9kby5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvZG8ucmVtb3ZlQ2hpbGQodG9kby5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoZG9pbmcuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb2luZy5yZW1vdmVDaGlsZChkb2luZy5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoZG9uZS5maXJzdENoaWxkKSB7XG4gICAgICAgIGRvbmUucmVtb3ZlQ2hpbGQoZG9uZS5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVmcmVzaERpc3BsYXl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvVERPYmouanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=