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
 




//loop through all items in the array and create (but not make new objects)
function createAllItems(array, saveString){
    array.forEach(item => {
        console.log("hello")
        createItemsFromStorage(item, saveString);
    });  
    }

function createItemsFromStorage(item, saveString){
    const title = item.title;
    const status = item.status;
    const description = item.description;
    const due = item.due;
    const priority = item.priority;
    const note = item.note;

    let array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects();

    console.log(title)
    var newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title, status, description, due, priority, note);
    array.push(newItem);
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedProjects(saveString, array);


    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(array);
    console.log(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects());
}

function createNewItem(saveString) {
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

function deleteItem(title, saveString){
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
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "toggleProjectList": () => (/* binding */ toggleProjectList)
/* harmony export */ });
/* harmony import */ var _savingStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savingStorage */ "./src/savingStorage.js");
/* harmony import */ var _addItemFormManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItemFormManager */ "./src/addItemFormManager.js");



function loadButtons() {
    const addItemBtn = document.getElementById('addItemBtn')
    addItemBtn.addEventListener('click', () => ((0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_1__.createNewItem)('savedItems')) )

    const popupAdd = document.getElementById('popupAdd')
    popupAdd.addEventListener('click', openForm);

    const closeBtn = document.getElementById('closeBtn')
    closeBtn.addEventListener('click', closeForm);

    const projectList = document.getElementById("myDropdownBtn");
    projectList.addEventListener('click', toggleProjectList);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";

  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 



/* -------------------------------------
--------------DROPDOWN BOX STUFF--------
--------------------------------------*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleProjectList() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log('hello')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
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
    btn.onclick = function(){;(0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(btn.title, 'savedItems')}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9URE9iai5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYWRkSXRlbUZvcm1NYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9idG5Mb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2F2aW5nU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdXBkYXRlRE9NLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlbGV0ZUl0ZW19IGZyb20gXCIuL2FkZEl0ZW1Gb3JtTWFuYWdlclwiXG5cbmZ1bmN0aW9uIFByb2plY3RMaXN0KG5hbWUsIGl0ZW1zKXtcbiAgICAgICAgY29uc3Qgb2JqID0gdGhpcztcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgICAgIHRoaXMuYWRkSXRlbSA9IChuZXdJdGVtKSA9PiBpdGVtcy5wdXNoKG5ld0l0ZW0pO1xufVxuXG5cblxuXG5cblxuZnVuY3Rpb24gVG9Ebyh0aXRsZSwgc3RhdHVzLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZSl7XG4gICAgICAgXG4gICAgICAvLyBjb25zdCBvYmogPSB0aGlzO1xuICAgICAgIFxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cblxuLypcbiAgICAgICAgLy8gV2l0aGluIHRoZSBmdW5jdGlvbiwgdXNlIG9iaiB0byByZWZlcmVuY2UgdGhlIGluc3RhbmNlLCBub3QgdGhpc1xuICAgICAgICB0aGlzLmNyZWF0ZUJ0biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi50eXBlID0gJ2J1dHRvbidcbiAgICAgICAgICAgICAgICBidG4udGl0bGUgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0oYnRuLnRpdGxlKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYnRuO1xuICAgICAgfTtcbiovXG59XG5leHBvcnQge1Byb2plY3RMaXN0LCBUb0RvfSIsImltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9URE9ialwiOyBcbmltcG9ydCB7cmVmcmVzaERpc3BsYXl9IGZyb20gXCIuL3VwZGF0ZURPTVwiO1xuaW1wb3J0IHtjbG9zZUZvcm19IGZyb20gXCIuL2J0bkxvZ2ljXCI7XG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc2F2aW5nU3RvcmFnZSc7XG5cbi8vbG9vcCB0aHJvdWdoIGFsbCBpdGVtcyBpbiB0aGUgYXJyYXkgYW5kIGNyZWF0ZSAoYnV0IG5vdCBtYWtlIG5ldyBvYmplY3RzKVxuZnVuY3Rpb24gY3JlYXRlQWxsSXRlbXMoYXJyYXksIHNhdmVTdHJpbmcpe1xuICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcbiAgICAgICAgY3JlYXRlSXRlbXNGcm9tU3RvcmFnZShpdGVtLCBzYXZlU3RyaW5nKTtcbiAgICB9KTsgIFxuICAgIH1cblxuZnVuY3Rpb24gY3JlYXRlSXRlbXNGcm9tU3RvcmFnZShpdGVtLCBzYXZlU3RyaW5nKXtcbiAgICBjb25zdCB0aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgY29uc3Qgc3RhdHVzID0gaXRlbS5zdGF0dXM7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGR1ZSA9IGl0ZW0uZHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gaXRlbS5wcmlvcml0eTtcbiAgICBjb25zdCBub3RlID0gaXRlbS5ub3RlO1xuXG4gICAgbGV0IGFycmF5ID0gc3RvcmFnZS5nZXRTYXZlZFByb2plY3RzKCk7XG5cbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgICB2YXIgbmV3SXRlbSA9IG5ldyBUb0RvKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3RlKTtcbiAgICBhcnJheS5wdXNoKG5ld0l0ZW0pO1xuICAgIHN0b3JhZ2Uuc2V0U2F2ZWRQcm9qZWN0cyhzYXZlU3RyaW5nLCBhcnJheSk7XG5cblxuICAgIHJlZnJlc2hEaXNwbGF5KGFycmF5KTtcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlLmdldFNhdmVkUHJvamVjdHMoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0l0ZW0oc2F2ZVN0cmluZykge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpdGxlJylbMF07XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3N0YXR1cycpWzBdO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2Rlc2MnKVswXTtcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnZHVlJylbMF07XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKVswXTtcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ25vdGVzJylbMF07XG4gICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGhhbmRsZVByaW9yaXR5KHByaW9yaXR5LnZhbHVlKTtcblxuICAgIGxldCBhcnJheSA9IHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpO1xuICAgIFxuICAgIC8vY3JlYXRlIG5ldyBvYmplY3QgdXNpbmcgdGhlIGZvcm1cblxuICAgIGNvbnNvbGUubG9nKHRpdGxlKVxuICAgIHZhciBuZXdJdGVtID0gbmV3IFRvRG8odGl0bGUudmFsdWUsIHN0YXR1cy52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZS52YWx1ZSwgcHJpb3JpdHlWYWx1ZSwgbm90ZS52YWx1ZSk7XG4gICAgYXJyYXkucHVzaChuZXdJdGVtKTtcbiAgICBzdG9yYWdlLnNldFNhdmVkUHJvamVjdHMoc2F2ZVN0cmluZywgYXJyYXkpO1xuXG5cbiAgICByZWZyZXNoRGlzcGxheShhcnJheSk7XG4gICAgY29uc29sZS5sb2coc3RvcmFnZS5nZXRTYXZlZFByb2plY3RzKCkpO1xuICAgIGNsZWFyRm9ybSh0aXRsZSwgc3RhdHVzLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZSk7XG59XG5cblxuZnVuY3Rpb24gY2xlYXJGb3JtKHRpdGxlLCBzdGF0dXMsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGUpe1xuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgc3RhdHVzLnZhbHVlID0gJyc7IFxuICAgIGRlc2MudmFsdWUgPSAnJzsgXG4gICAgZHVlLnZhbHVlID0gJyc7IFxuICAgIHByaW9yaXR5LnZhbHVlID0gJyc7XG4gICAgbm90ZS52YWx1ZSA9ICcnO1xuICAgIGNsb3NlRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmlvcml0eSh2YWx1ZSl7XG4gICAgaWYgKHZhbHVlID09IDApIHtyZXR1cm4gXCJMT1dcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAxKSB7cmV0dXJuXCJNRURcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAyKSB7cmV0dXJuIFwiSElHSFwifVxufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtKHRpdGxlLCBzYXZlU3RyaW5nKXtcbiAgICBjb25zdCBhcnJheSA9IHN0b3JhZ2UuZ2V0SXRlbXMoKTtcbiAgICBjb25zdCByZW1vdmVUaXRsZSA9IGFycmF5LmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aXRsZSApO1xuICAgIGNvbnNvbGUubG9nKGBkZWxldGluZyBpdGVtICR7dGl0bGV9YClcblxuICAgIC8vIHJlbW92ZSBvYmplY3RcbiAgICBjb25zb2xlLmxvZyhhcnJheS5sZW5ndGgpO1xuICAgIGFycmF5LnNwbGljZSggcmVtb3ZlVGl0bGUsIDEgKTtcbiAgICBzdG9yYWdlLnNldFNhdmVkUHJvamVjdHMoc2F2ZVN0cmluZywgYXJyYXkpXG4gICAgY29uc29sZS5sb2coYXJyYXkubGVuZ3RoKTtcbiAgICByZWZyZXNoRGlzcGxheShhcnJheSlcbn1cblxuXG5leHBvcnQge2NyZWF0ZU5ld0l0ZW0sIGRlbGV0ZUl0ZW0sIGNyZWF0ZUFsbEl0ZW1zfSIsImltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9zYXZpbmdTdG9yYWdlJztcbmltcG9ydCB7Y3JlYXRlTmV3SXRlbX0gZnJvbSAnLi9hZGRJdGVtRm9ybU1hbmFnZXInO1xuXG5mdW5jdGlvbiBsb2FkQnV0dG9ucygpIHtcbiAgICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEl0ZW1CdG4nKVxuICAgIGFkZEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiAoY3JlYXRlTmV3SXRlbSgnc2F2ZWRJdGVtcycpKSApXG5cbiAgICBjb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cEFkZCcpXG4gICAgcG9wdXBBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ0bicpXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15RHJvcGRvd25CdG5cIik7XG4gICAgcHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQcm9qZWN0TGlzdCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgfVxuICBcbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59IFxuXG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS1EUk9QRE9XTiBCT1ggU1RVRkYtLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uLFxudG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBkcm9wZG93biBjb250ZW50ICovXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0TGlzdCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteURyb3Bkb3duXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICBjb25zb2xlLmxvZygnaGVsbG8nKVxufVxuXG4vLyBDbG9zZSB0aGUgZHJvcGRvd24gbWVudSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGJ0bicpKSB7XG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XG4gICAgICBpZiAob3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59IFxuXG5cblxuXG5cbmV4cG9ydCB7bG9hZEJ1dHRvbnMsIGNsb3NlRm9ybSwgdG9nZ2xlUHJvamVjdExpc3R9XG4iLCJsZXQgaXRlbUFycmF5ID0gW107XG5sZXQgcHJvamVjdEFycmF5ID0gW11cblxuLy9TdG9sZW4gY29kZSB0aGF0IGFsbG93cyB0aGUgc2F2aW5nIG9mIG9iamVjdHMgdG8gbG9jYWwgc3RvcmFnZVxuU3RvcmFnZS5wcm90b3R5cGUuc2V0T2JqID0gZnVuY3Rpb24oa2V5LCBvYmopIHtcbiAgICByZXR1cm4gdGhpcy5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcbn1cbi8vU3RvbGVuIGNvZGUgdGhhdCBhbGxvd3MgdGhlIGdldHRpbmcgb2Ygb2JqZWN0cyB0byBsb2NhbCBzdG9yYWdlXG5TdG9yYWdlLnByb3RvdHlwZS5nZXRPYmogPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldEl0ZW0oa2V5KSlcbn1cblxuZnVuY3Rpb24gc2V0U2F2ZWRQcm9qZWN0cyhzdHJpbmcsIGFycmF5KSB7XG4gICAgaWYgKGFycmF5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRPYmooc3RyaW5nLCBhcnJheSkgLy9LZXkgaXMgbm90IHRoZSBvYmoga2V5IGJ1dCB0aGUga2V5IHRvIHNhdmUgc2hpdCB1bmRlclxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTYXZlZFByb2plY3RzKHN0cmluZykge1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRPYmooc3RyaW5nKSl7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0T2JqKHN0cmluZyk7XG4gICAgfVxuXG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGl0ZW1BcnJheTtcbiAgICB9XG4gLy9BY2NlcyB0aGUga2V5IHRoZSBsaWJyYXJ5IGhhcyBiZWVuIHNhdmVkIHRvXG59XG5cbmZ1bmN0aW9uIGdldEl0ZW1zKCl7XG4gICAgcmV0dXJuIGl0ZW1BcnJheVxufVxuXG5cbmZ1bmN0aW9uIHNldEl0ZW1zKGFycmF5KXtcbiAgICBpdGVtQXJyYXkgPSBhcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKXtcbiAgICByZXR1cm4gcHJvamVjdEFycmF5XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RzKGFycmF5KXtcbiAgICBwcm9qZWN0QXJyYXkgPSBhcnJheTtcbn1cblxuXG5leHBvcnQge3NldFNhdmVkUHJvamVjdHMsIGdldFNhdmVkUHJvamVjdHMsIGdldEl0ZW1zLCBnZXRQcm9qZWN0cywgc2V0SXRlbXMsIHNldFByb2plY3RzfSIsImltcG9ydCB7IGRlbGV0ZUl0ZW0gfSBmcm9tIFwiLi9hZGRJdGVtRm9ybU1hbmFnZXJcIjtcblxuZnVuY3Rpb24gcmVmcmVzaERpc3BsYXkoYXJyYXkpIHtcbiAgICBkaXNwbGF5VEQoYXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKCdhZGRlZCcpO1xufVxuXG4vL0FkZHMgYSBuZXcgdG8gZG8gY2FyZCB0byB0aGUgY3VycmVudCBwcm9qZWN0XG5mdW5jdGlvbiBkaXNwbGF5VEQoYXJyYXkpIHtcblxuICAgIC8vY2xlYXIgYWxsIGl0ZW1zXG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZG9pbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9pbmdDb250YWluZXInKTtcbiAgICBjb25zdCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmVDb250YWluZXInKTtcblxuICAgIGNsZWFybkNvbnRhaW5lcnModG9Eb0NvbnRhaW5lciwgZG9pbmdDb250YWluZXIsIGRvbmVDb250YWluZXIpO1xuXG4gICAgLy9hZGQgYWxsIGl0ZW1zIGJhY2sgaW5cbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICBcbiAgICAgICAgLy9JdGVtcyBkaXZcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdDYXJkLmNsYXNzTGlzdC5hZGQoJ1RESXRlbScpO1xuXG4gICAgICAgIC8vQWRkIGVhY2ggc2VjdGlvbiBvZiB0aGUgbmV3IGl0ZW0gaW5zaWRlIHRoZWlyIG93biBkaXZzXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtVGl0bGUuaW5uZXJIVE1MID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGVzYy5pbm5lckhUTUwgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUR1ZS5pbm5lckhUTUwgPSBlbGVtZW50LmR1ZTtcblxuICAgICAgICBjb25zdCBpdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVByaW9yaXR5LmlubmVySFRNTCA9IGVsZW1lbnQucHJpb3JpdHk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbU5vdGUuaW5uZXJIVE1MID0gZWxlbWVudC5ub3RlO1xuXG5cblxuIFxuXG4gICAgICAgIGNvbnN0IGl0ZW1CdG4gPSBjcmVhdGVCdXR0b24oZWxlbWVudCk7XG4gICAgICAgICAgICBpdGVtQnRuLmlubmVySFRNTCA9ICctJ1xuICAgICAgICAgICAgaXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGVJdGVtQnRuJyk7XG5cbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtQnRuKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtRHVlKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtUHJpb3JpdHkpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1Ob3RlKTtcblxuXG4gICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PSAwKXtcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50LnN0YXR1cyA9PSAxKXtcbiAgICAgICAgICAgIGRvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMil7XG4gICAgICAgICAgICBkb25lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9KTtcblxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihlbGVtZW50KXtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udHlwZSA9ICdidXR0b24nO1xuICAgIGJ0bi50aXRsZSA9IGVsZW1lbnQudGl0bGU7XG4gICAgY29uc29sZS5sb2coYnRuLnRpdGxlKVxuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtkZWxldGVJdGVtKGJ0bi50aXRsZSwgJ3NhdmVkSXRlbXMnKX1cbiAgICByZXR1cm4gYnRuO1xufVxuXG5cbmZ1bmN0aW9uIGNsZWFybkNvbnRhaW5lcnModG9kbywgZG9pbmcsIGRvbmUpIHtcbiAgICB3aGlsZSAodG9kby5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvZG8ucmVtb3ZlQ2hpbGQodG9kby5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoZG9pbmcuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb2luZy5yZW1vdmVDaGlsZChkb2luZy5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoZG9uZS5maXJzdENoaWxkKSB7XG4gICAgICAgIGRvbmUucmVtb3ZlQ2hpbGQoZG9uZS5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVmcmVzaERpc3BsYXl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvVERPYmouanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=