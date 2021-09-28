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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/addItemFormManager.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9URE9iai5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYWRkSXRlbUZvcm1NYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9idG5Mb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2F2aW5nU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdXBkYXRlRE9NLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlbGV0ZUl0ZW19IGZyb20gXCIuL2FkZEl0ZW1Gb3JtTWFuYWdlclwiXG5cbmZ1bmN0aW9uIFByb2plY3RMaXN0KG5hbWUsIGl0ZW1zKXtcbiAgICAgICAgY29uc3Qgb2JqID0gdGhpcztcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgICAgIHRoaXMuYWRkSXRlbSA9IChuZXdJdGVtKSA9PiBpdGVtcy5wdXNoKG5ld0l0ZW0pO1xufVxuXG5cblxuXG5cblxuZnVuY3Rpb24gVG9Ebyh0aXRsZSwgc3RhdHVzLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZSl7XG4gICAgICAgXG4gICAgICAvLyBjb25zdCBvYmogPSB0aGlzO1xuICAgICAgIFxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cblxuLypcbiAgICAgICAgLy8gV2l0aGluIHRoZSBmdW5jdGlvbiwgdXNlIG9iaiB0byByZWZlcmVuY2UgdGhlIGluc3RhbmNlLCBub3QgdGhpc1xuICAgICAgICB0aGlzLmNyZWF0ZUJ0biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi50eXBlID0gJ2J1dHRvbidcbiAgICAgICAgICAgICAgICBidG4udGl0bGUgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0oYnRuLnRpdGxlKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYnRuO1xuICAgICAgfTtcbiovXG59XG5leHBvcnQge1Byb2plY3RMaXN0LCBUb0RvfSIsImltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9URE9ialwiOyBcbmltcG9ydCB7cmVmcmVzaERpc3BsYXl9IGZyb20gXCIuL3VwZGF0ZURPTVwiO1xuaW1wb3J0IHtjbG9zZUZvcm19IGZyb20gXCIuL2J0bkxvZ2ljXCI7XG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc2F2aW5nU3RvcmFnZSc7XG5cblxuY29uc3Qgc2F2ZVN0cmluZyA9ICdzYXZlZEl0ZW1zJztcblxuLy9sb29wIHRocm91Z2ggYWxsIGl0ZW1zIGluIHRoZSBhcnJheSBhbmQgY3JlYXRlIChidXQgbm90IG1ha2UgbmV3IG9iamVjdHMpXG5mdW5jdGlvbiBjcmVhdGVBbGxJdGVtcyhhcnJheSl7XG4gICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICBjcmVhdGVJdGVtc0Zyb21TdG9yYWdlKGl0ZW0pO1xuICAgIH0pOyAgXG4gICAgfVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtc0Zyb21TdG9yYWdlKGl0ZW0pe1xuICAgIGNvbnN0IHRpdGxlID0gaXRlbS50aXRsZTtcbiAgICBjb25zdCBzdGF0dXMgPSBpdGVtLnN0YXR1cztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgZHVlID0gaXRlbS5kdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBpdGVtLnByaW9yaXR5O1xuICAgIGNvbnN0IG5vdGUgPSBpdGVtLm5vdGU7XG4gICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGhhbmRsZVByaW9yaXR5KHByaW9yaXR5LnZhbHVlKTtcblxuICAgIGxldCBhcnJheSA9IHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpO1xuXG4gICAgY29uc29sZS5sb2codGl0bGUpXG4gICAgdmFyIG5ld0l0ZW0gPSBuZXcgVG9Ebyh0aXRsZSwgc3RhdHVzLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eVZhbHVlLCBub3RlKTtcbiAgICBhcnJheS5wdXNoKG5ld0l0ZW0pO1xuICAgIHN0b3JhZ2Uuc2V0U2F2ZWRQcm9qZWN0cyhzYXZlU3RyaW5nLCBhcnJheSk7XG5cblxuICAgIHJlZnJlc2hEaXNwbGF5KGFycmF5KTtcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlLmdldFNhdmVkUHJvamVjdHMoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0l0ZW0oKSB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0aXRsZScpWzBdO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzdGF0dXMnKVswXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdkZXNjJylbMF07XG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2R1ZScpWzBdO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3ByaW9yaXR5JylbMF07XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdub3RlcycpWzBdO1xuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBoYW5kbGVQcmlvcml0eShwcmlvcml0eS52YWx1ZSk7XG5cbiAgICBsZXQgYXJyYXkgPSBzdG9yYWdlLmdldFNhdmVkUHJvamVjdHMoKTtcbiAgICBcbiAgICAvL2NyZWF0ZSBuZXcgb2JqZWN0IHVzaW5nIHRoZSBmb3JtXG5cbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgICB2YXIgbmV3SXRlbSA9IG5ldyBUb0RvKHRpdGxlLnZhbHVlLCBzdGF0dXMudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWUudmFsdWUsIHByaW9yaXR5VmFsdWUsIG5vdGUudmFsdWUpO1xuICAgIGFycmF5LnB1c2gobmV3SXRlbSk7XG4gICAgc3RvcmFnZS5zZXRTYXZlZFByb2plY3RzKHNhdmVTdHJpbmcsIGFycmF5KTtcblxuXG4gICAgcmVmcmVzaERpc3BsYXkoYXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpKTtcbiAgICBjbGVhckZvcm0odGl0bGUsIHN0YXR1cywgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIG5vdGUpO1xufVxuXG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSh0aXRsZSwgc3RhdHVzLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBub3RlKXtcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIHN0YXR1cy52YWx1ZSA9ICcnOyBcbiAgICBkZXNjLnZhbHVlID0gJyc7IFxuICAgIGR1ZS52YWx1ZSA9ICcnOyBcbiAgICBwcmlvcml0eS52YWx1ZSA9ICcnO1xuICAgIG5vdGUudmFsdWUgPSAnJztcbiAgICBjbG9zZUZvcm0oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJpb3JpdHkodmFsdWUpe1xuICAgIGlmICh2YWx1ZSA9PSAwKSB7cmV0dXJuIFwiTE9XXCJ9XG4gICAgZWxzZSBpZiAodmFsdWUgPT0gMSkge3JldHVyblwiTUVEXCJ9XG4gICAgZWxzZSBpZiAodmFsdWUgPT0gMikge3JldHVybiBcIkhJR0hcIn1cbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbSh0aXRsZSl7XG4gICAgY29uc3QgYXJyYXkgPSBzdG9yYWdlLmdldEl0ZW1zKCk7XG4gICAgY29uc3QgcmVtb3ZlVGl0bGUgPSBhcnJheS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdGl0bGUgKTtcbiAgICBjb25zb2xlLmxvZyhgZGVsZXRpbmcgaXRlbSAke3RpdGxlfWApXG5cbiAgICAvLyByZW1vdmUgb2JqZWN0XG4gICAgY29uc29sZS5sb2coYXJyYXkubGVuZ3RoKTtcbiAgICBhcnJheS5zcGxpY2UoIHJlbW92ZVRpdGxlLCAxICk7XG4gICAgc3RvcmFnZS5zZXRTYXZlZFByb2plY3RzKHNhdmVTdHJpbmcsIGFycmF5KVxuICAgIGNvbnNvbGUubG9nKGFycmF5Lmxlbmd0aCk7XG4gICAgcmVmcmVzaERpc3BsYXkoYXJyYXkpXG59XG5cblxuZXhwb3J0IHtjcmVhdGVOZXdJdGVtLCBkZWxldGVJdGVtLCBjcmVhdGVBbGxJdGVtc30iLCJpbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc2F2aW5nU3RvcmFnZSc7XG5pbXBvcnQge2NyZWF0ZU5ld0l0ZW19IGZyb20gJy4vYWRkSXRlbUZvcm1NYW5hZ2VyJztcblxuZnVuY3Rpb24gbG9hZEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRJdGVtQnRuJylcbiAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gKGNyZWF0ZU5ld0l0ZW0oc3RvcmFnZS5nZXRJdGVtcygpLCB0cnVlKSkgKVxuXG4gICAgY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBBZGQnKVxuICAgIHBvcHVwQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkZvcm0pO1xuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdG4nKVxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICB9XG4gIFxuICBmdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IFxuXG5cbmV4cG9ydCB7bG9hZEJ1dHRvbnMsIGNsb3NlRm9ybX0iLCJsZXQgaXRlbUFycmF5ID0gW107XG5sZXQgcHJvamVjdEFycmF5ID0gW11cblxuLy9TdG9sZW4gY29kZSB0aGF0IGFsbG93cyB0aGUgc2F2aW5nIG9mIG9iamVjdHMgdG8gbG9jYWwgc3RvcmFnZVxuU3RvcmFnZS5wcm90b3R5cGUuc2V0T2JqID0gZnVuY3Rpb24oa2V5LCBvYmopIHtcbiAgICByZXR1cm4gdGhpcy5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcbn1cbi8vU3RvbGVuIGNvZGUgdGhhdCBhbGxvd3MgdGhlIGdldHRpbmcgb2Ygb2JqZWN0cyB0byBsb2NhbCBzdG9yYWdlXG5TdG9yYWdlLnByb3RvdHlwZS5nZXRPYmogPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldEl0ZW0oa2V5KSlcbn1cblxuZnVuY3Rpb24gc2V0U2F2ZWRQcm9qZWN0cyhzdHJpbmcsIGFycmF5KSB7XG4gICAgaWYgKGFycmF5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRPYmooc3RyaW5nLCBhcnJheSkgLy9LZXkgaXMgbm90IHRoZSBvYmoga2V5IGJ1dCB0aGUga2V5IHRvIHNhdmUgc2hpdCB1bmRlclxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTYXZlZFByb2plY3RzKHN0cmluZykge1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRPYmooc3RyaW5nKSl7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0T2JqKHN0cmluZyk7XG4gICAgfVxuXG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGl0ZW1BcnJheTtcbiAgICB9XG4gLy9BY2NlcyB0aGUga2V5IHRoZSBsaWJyYXJ5IGhhcyBiZWVuIHNhdmVkIHRvXG59XG5cbmZ1bmN0aW9uIGdldEl0ZW1zKCl7XG4gICAgcmV0dXJuIGl0ZW1BcnJheVxufVxuXG5cbmZ1bmN0aW9uIHNldEl0ZW1zKGFycmF5KXtcbiAgICBpdGVtQXJyYXkgPSBhcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKXtcbiAgICByZXR1cm4gcHJvamVjdEFycmF5XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RzKGFycmF5KXtcbiAgICBwcm9qZWN0QXJyYXkgPSBhcnJheTtcbn1cblxuXG5leHBvcnQge3NldFNhdmVkUHJvamVjdHMsIGdldFNhdmVkUHJvamVjdHMsIGdldEl0ZW1zLCBnZXRQcm9qZWN0cywgc2V0SXRlbXMsIHNldFByb2plY3RzfSIsImltcG9ydCB7IGRlbGV0ZUl0ZW0gfSBmcm9tIFwiLi9hZGRJdGVtRm9ybU1hbmFnZXJcIjtcblxuZnVuY3Rpb24gcmVmcmVzaERpc3BsYXkoYXJyYXkpIHtcbiAgICBkaXNwbGF5VEQoYXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKCdhZGRlZCcpO1xufVxuXG4vL0FkZHMgYSBuZXcgdG8gZG8gY2FyZCB0byB0aGUgY3VycmVudCBwcm9qZWN0XG5mdW5jdGlvbiBkaXNwbGF5VEQoYXJyYXkpIHtcblxuICAgIC8vY2xlYXIgYWxsIGl0ZW1zXG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZG9pbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9pbmdDb250YWluZXInKTtcbiAgICBjb25zdCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmVDb250YWluZXInKTtcblxuICAgIGNsZWFybkNvbnRhaW5lcnModG9Eb0NvbnRhaW5lciwgZG9pbmdDb250YWluZXIsIGRvbmVDb250YWluZXIpO1xuXG4gICAgLy9hZGQgYWxsIGl0ZW1zIGJhY2sgaW5cbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICBcbiAgICAgICAgLy9JdGVtcyBkaXZcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdDYXJkLmNsYXNzTGlzdC5hZGQoJ1RESXRlbScpO1xuXG4gICAgICAgIC8vQWRkIGVhY2ggc2VjdGlvbiBvZiB0aGUgbmV3IGl0ZW0gaW5zaWRlIHRoZWlyIG93biBkaXZzXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtVGl0bGUuaW5uZXJIVE1MID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGVzYy5pbm5lckhUTUwgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUR1ZS5pbm5lckhUTUwgPSBlbGVtZW50LmR1ZTtcblxuICAgICAgICBjb25zdCBpdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVByaW9yaXR5LmlubmVySFRNTCA9IGVsZW1lbnQucHJpb3JpdHk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbU5vdGUuaW5uZXJIVE1MID0gZWxlbWVudC5ub3RlO1xuXG5cblxuIFxuXG4gICAgICAgIGNvbnN0IGl0ZW1CdG4gPSBjcmVhdGVCdXR0b24oZWxlbWVudCk7XG4gICAgICAgICAgICBpdGVtQnRuLmlubmVySFRNTCA9ICctJ1xuICAgICAgICAgICAgaXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGVJdGVtQnRuJyk7XG5cbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtQnRuKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtRHVlKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtUHJpb3JpdHkpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1Ob3RlKTtcblxuXG4gICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PSAwKXtcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50LnN0YXR1cyA9PSAxKXtcbiAgICAgICAgICAgIGRvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMil7XG4gICAgICAgICAgICBkb25lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9KTtcblxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihlbGVtZW50KXtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udHlwZSA9ICdidXR0b24nO1xuICAgIGJ0bi50aXRsZSA9IGVsZW1lbnQudGl0bGU7XG4gICAgY29uc29sZS5sb2coYnRuLnRpdGxlKVxuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtkZWxldGVJdGVtKGJ0bi50aXRsZSl9XG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuXG5mdW5jdGlvbiBjbGVhcm5Db250YWluZXJzKHRvZG8sIGRvaW5nLCBkb25lKSB7XG4gICAgd2hpbGUgKHRvZG8uZmlyc3RDaGlsZCkge1xuICAgICAgICB0b2RvLnJlbW92ZUNoaWxkKHRvZG8uZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvaW5nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9pbmcucmVtb3ZlQ2hpbGQoZG9pbmcuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvbmUuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb25lLnJlbW92ZUNoaWxkKGRvbmUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQge3JlZnJlc2hEaXNwbGF5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FkZEl0ZW1Gb3JtTWFuYWdlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==