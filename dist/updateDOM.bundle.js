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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/updateDOM.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlRE9NLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStDOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QytCO0FBQ1k7QUFDTjtBQUNNOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiw0REFBd0I7O0FBRXhDO0FBQ0Esc0JBQXNCLHdDQUFJO0FBQzFCO0FBQ0EsSUFBSSw0REFBd0I7OztBQUc1QixJQUFJLDBEQUFjO0FBQ2xCLGdCQUFnQiw0REFBd0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsNERBQXdCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isd0NBQUk7QUFDMUI7QUFDQSxJQUFJLDREQUF3Qjs7O0FBRzVCLElBQUksMERBQWM7QUFDbEIsZ0JBQWdCLDREQUF3QjtBQUN4QztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0Esa0JBQWtCLG9EQUFnQjtBQUNsQztBQUNBLGlDQUFpQyxNQUFNOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUF3QjtBQUM1QjtBQUNBLElBQUksMERBQWM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGMkM7QUFDUTs7QUFFbkQ7QUFDQTtBQUNBLGdEQUFnRCxrRUFBYTs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2tEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdFQUFVO0FBQ3ZDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMvRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvVERPYmouanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2FkZEl0ZW1Gb3JtTWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYnRuTG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3NhdmluZ1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3VwZGF0ZURPTS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkZWxldGVJdGVtfSBmcm9tIFwiLi9hZGRJdGVtRm9ybU1hbmFnZXJcIlxuXG5mdW5jdGlvbiBQcm9qZWN0TGlzdChuYW1lLCBpdGVtcyl7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLmFkZEl0ZW0gPSAobmV3SXRlbSkgPT4gaXRlbXMucHVzaChuZXdJdGVtKTtcbn1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIFRvRG8odGl0bGUsIHN0YXR1cywgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIG5vdGUpe1xuICAgICAgIFxuICAgICAgLy8gY29uc3Qgb2JqID0gdGhpcztcbiAgICAgICBcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZSA9IGR1ZTtcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG5cbi8qXG4gICAgICAgIC8vIFdpdGhpbiB0aGUgZnVuY3Rpb24sIHVzZSBvYmogdG8gcmVmZXJlbmNlIHRoZSBpbnN0YW5jZSwgbm90IHRoaXNcbiAgICAgICAgdGhpcy5jcmVhdGVCdG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBidG4udHlwZSA9ICdidXR0b24nXG4gICAgICAgICAgICAgICAgYnRuLnRpdGxlID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtKGJ0bi50aXRsZSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICAgIH07XG4qL1xufVxuZXhwb3J0IHtQcm9qZWN0TGlzdCwgVG9Eb30iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVERPYmpcIjsgXG5pbXBvcnQge3JlZnJlc2hEaXNwbGF5fSBmcm9tIFwiLi91cGRhdGVET01cIjtcbmltcG9ydCB7Y2xvc2VGb3JtfSBmcm9tIFwiLi9idG5Mb2dpY1wiO1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tICcuL3NhdmluZ1N0b3JhZ2UnO1xuXG4vL2xvb3AgdGhyb3VnaCBhbGwgaXRlbXMgaW4gdGhlIGFycmF5IGFuZCBjcmVhdGUgKGJ1dCBub3QgbWFrZSBuZXcgb2JqZWN0cylcbmZ1bmN0aW9uIGNyZWF0ZUFsbEl0ZW1zKGFycmF5LCBzYXZlU3RyaW5nKXtcbiAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAgIGNyZWF0ZUl0ZW1zRnJvbVN0b3JhZ2UoaXRlbSwgc2F2ZVN0cmluZyk7XG4gICAgfSk7ICBcbiAgICB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1zRnJvbVN0b3JhZ2UoaXRlbSwgc2F2ZVN0cmluZyl7XG4gICAgY29uc3QgdGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgIGNvbnN0IHN0YXR1cyA9IGl0ZW0uc3RhdHVzO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBkdWUgPSBpdGVtLmR1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGl0ZW0ucHJpb3JpdHk7XG4gICAgY29uc3Qgbm90ZSA9IGl0ZW0ubm90ZTtcblxuICAgIGxldCBhcnJheSA9IHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpO1xuXG4gICAgY29uc29sZS5sb2codGl0bGUpXG4gICAgdmFyIG5ld0l0ZW0gPSBuZXcgVG9Ebyh0aXRsZSwgc3RhdHVzLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZSk7XG4gICAgYXJyYXkucHVzaChuZXdJdGVtKTtcbiAgICBzdG9yYWdlLnNldFNhdmVkUHJvamVjdHMoc2F2ZVN0cmluZywgYXJyYXkpO1xuXG5cbiAgICByZWZyZXNoRGlzcGxheShhcnJheSk7XG4gICAgY29uc29sZS5sb2coc3RvcmFnZS5nZXRTYXZlZFByb2plY3RzKCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdJdGVtKHNhdmVTdHJpbmcpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0aXRsZScpWzBdO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzdGF0dXMnKVswXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdkZXNjJylbMF07XG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2R1ZScpWzBdO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3ByaW9yaXR5JylbMF07XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdub3RlcycpWzBdO1xuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBoYW5kbGVQcmlvcml0eShwcmlvcml0eS52YWx1ZSk7XG5cbiAgICBsZXQgYXJyYXkgPSBzdG9yYWdlLmdldFNhdmVkUHJvamVjdHMoKTtcbiAgICBcbiAgICAvL2NyZWF0ZSBuZXcgb2JqZWN0IHVzaW5nIHRoZSBmb3JtXG5cbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgICB2YXIgbmV3SXRlbSA9IG5ldyBUb0RvKHRpdGxlLnZhbHVlLCBzdGF0dXMudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWUudmFsdWUsIHByaW9yaXR5VmFsdWUsIG5vdGUudmFsdWUpO1xuICAgIGFycmF5LnB1c2gobmV3SXRlbSk7XG4gICAgc3RvcmFnZS5zZXRTYXZlZFByb2plY3RzKHNhdmVTdHJpbmcsIGFycmF5KTtcblxuXG4gICAgcmVmcmVzaERpc3BsYXkoYXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpKTtcbiAgICBjbGVhckZvcm0odGl0bGUsIHN0YXR1cywgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIG5vdGUpO1xufVxuXG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSh0aXRsZSwgc3RhdHVzLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBub3RlKXtcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIHN0YXR1cy52YWx1ZSA9ICcnOyBcbiAgICBkZXNjLnZhbHVlID0gJyc7IFxuICAgIGR1ZS52YWx1ZSA9ICcnOyBcbiAgICBwcmlvcml0eS52YWx1ZSA9ICcnO1xuICAgIG5vdGUudmFsdWUgPSAnJztcbiAgICBjbG9zZUZvcm0oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJpb3JpdHkodmFsdWUpe1xuICAgIGlmICh2YWx1ZSA9PSAwKSB7cmV0dXJuIFwiTE9XXCJ9XG4gICAgZWxzZSBpZiAodmFsdWUgPT0gMSkge3JldHVyblwiTUVEXCJ9XG4gICAgZWxzZSBpZiAodmFsdWUgPT0gMikge3JldHVybiBcIkhJR0hcIn1cbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbSh0aXRsZSwgc2F2ZVN0cmluZyl7XG4gICAgY29uc3QgYXJyYXkgPSBzdG9yYWdlLmdldEl0ZW1zKCk7XG4gICAgY29uc3QgcmVtb3ZlVGl0bGUgPSBhcnJheS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdGl0bGUgKTtcbiAgICBjb25zb2xlLmxvZyhgZGVsZXRpbmcgaXRlbSAke3RpdGxlfWApXG5cbiAgICAvLyByZW1vdmUgb2JqZWN0XG4gICAgY29uc29sZS5sb2coYXJyYXkubGVuZ3RoKTtcbiAgICBhcnJheS5zcGxpY2UoIHJlbW92ZVRpdGxlLCAxICk7XG4gICAgc3RvcmFnZS5zZXRTYXZlZFByb2plY3RzKHNhdmVTdHJpbmcsIGFycmF5KVxuICAgIGNvbnNvbGUubG9nKGFycmF5Lmxlbmd0aCk7XG4gICAgcmVmcmVzaERpc3BsYXkoYXJyYXkpXG59XG5cblxuZXhwb3J0IHtjcmVhdGVOZXdJdGVtLCBkZWxldGVJdGVtLCBjcmVhdGVBbGxJdGVtc30iLCJpbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc2F2aW5nU3RvcmFnZSc7XG5pbXBvcnQge2NyZWF0ZU5ld0l0ZW19IGZyb20gJy4vYWRkSXRlbUZvcm1NYW5hZ2VyJztcblxuZnVuY3Rpb24gbG9hZEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRJdGVtQnRuJylcbiAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gKGNyZWF0ZU5ld0l0ZW0oJ3NhdmVkSXRlbXMnKSkgKVxuXG4gICAgY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBBZGQnKVxuICAgIHBvcHVwQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkZvcm0pO1xuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdG4nKVxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteURyb3Bkb3duQnRuXCIpO1xuICAgIHByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUHJvamVjdExpc3QpO1xufVxuXG5mdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIH1cbiAgXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tRFJPUERPV04gQk9YIFNUVUZGLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyogV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbixcbnRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdExpc3QoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEcm9wZG93blwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgY29uc29sZS5sb2coJ2hlbGxvJylcbn1cblxuLy8gQ2xvc2UgdGhlIGRyb3Bkb3duIG1lbnUgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmRyb3BidG4nKSkge1xuICAgIHZhciBkcm9wZG93bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJvcGRvd24tY29udGVudFwiKTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgb3BlbkRyb3Bkb3duID0gZHJvcGRvd25zW2ldO1xuICAgICAgaWYgKG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSBcblxuXG5cblxuXG5leHBvcnQge2xvYWRCdXR0b25zLCBjbG9zZUZvcm0sIHRvZ2dsZVByb2plY3RMaXN0fVxuIiwibGV0IGl0ZW1BcnJheSA9IFtdO1xubGV0IHByb2plY3RBcnJheSA9IFtdXG5cbi8vU3RvbGVuIGNvZGUgdGhhdCBhbGxvd3MgdGhlIHNhdmluZyBvZiBvYmplY3RzIHRvIGxvY2FsIHN0b3JhZ2VcblN0b3JhZ2UucHJvdG90eXBlLnNldE9iaiA9IGZ1bmN0aW9uKGtleSwgb2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG9iaikpXG59XG4vL1N0b2xlbiBjb2RlIHRoYXQgYWxsb3dzIHRoZSBnZXR0aW5nIG9mIG9iamVjdHMgdG8gbG9jYWwgc3RvcmFnZVxuU3RvcmFnZS5wcm90b3R5cGUuZ2V0T2JqID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRJdGVtKGtleSkpXG59XG5cbmZ1bmN0aW9uIHNldFNhdmVkUHJvamVjdHMoc3RyaW5nLCBhcnJheSkge1xuICAgIGlmIChhcnJheSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0T2JqKHN0cmluZywgYXJyYXkpIC8vS2V5IGlzIG5vdCB0aGUgb2JqIGtleSBidXQgdGhlIGtleSB0byBzYXZlIHNoaXQgdW5kZXJcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2F2ZWRQcm9qZWN0cyhzdHJpbmcpIHtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0T2JqKHN0cmluZykpe1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldE9iaihzdHJpbmcpO1xuICAgIH1cblxuICAgIGVsc2V7XG4gICAgICAgIHJldHVybiBpdGVtQXJyYXk7XG4gICAgfVxuIC8vQWNjZXMgdGhlIGtleSB0aGUgbGlicmFyeSBoYXMgYmVlbiBzYXZlZCB0b1xufVxuXG5mdW5jdGlvbiBnZXRJdGVtcygpe1xuICAgIHJldHVybiBpdGVtQXJyYXlcbn1cblxuXG5mdW5jdGlvbiBzZXRJdGVtcyhhcnJheSl7XG4gICAgaXRlbUFycmF5ID0gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCl7XG4gICAgcmV0dXJuIHByb2plY3RBcnJheVxufVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0cyhhcnJheSl7XG4gICAgcHJvamVjdEFycmF5ID0gYXJyYXk7XG59XG5cblxuZXhwb3J0IHtzZXRTYXZlZFByb2plY3RzLCBnZXRTYXZlZFByb2plY3RzLCBnZXRJdGVtcywgZ2V0UHJvamVjdHMsIHNldEl0ZW1zLCBzZXRQcm9qZWN0c30iLCJpbXBvcnQgeyBkZWxldGVJdGVtIH0gZnJvbSBcIi4vYWRkSXRlbUZvcm1NYW5hZ2VyXCI7XG5cbmZ1bmN0aW9uIHJlZnJlc2hEaXNwbGF5KGFycmF5KSB7XG4gICAgZGlzcGxheVREKGFycmF5KTtcbiAgICBjb25zb2xlLmxvZygnYWRkZWQnKTtcbn1cblxuLy9BZGRzIGEgbmV3IHRvIGRvIGNhcmQgdG8gdGhlIGN1cnJlbnQgcHJvamVjdFxuZnVuY3Rpb24gZGlzcGxheVREKGFycmF5KSB7XG5cbiAgICAvL2NsZWFyIGFsbCBpdGVtc1xuICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRvaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvaW5nQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZG9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb25lQ29udGFpbmVyJyk7XG5cbiAgICBjbGVhcm5Db250YWluZXJzKHRvRG9Db250YWluZXIsIGRvaW5nQ29udGFpbmVyLCBkb25lQ29udGFpbmVyKTtcblxuICAgIC8vYWRkIGFsbCBpdGVtcyBiYWNrIGluXG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgXG4gICAgICAgIC8vSXRlbXMgZGl2XG4gICAgICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3Q2FyZC5jbGFzc0xpc3QuYWRkKCdUREl0ZW0nKTtcblxuICAgICAgICAvL0FkZCBlYWNoIHNlY3Rpb24gb2YgdGhlIG5ldyBpdGVtIGluc2lkZSB0aGVpciBvd24gZGl2c1xuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVRpdGxlLmlubmVySFRNTCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbURlc2MuaW5uZXJIVE1MID0gZWxlbWVudC5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBpdGVtRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EdWUuaW5uZXJIVE1MID0gZWxlbWVudC5kdWU7XG5cbiAgICAgICAgY29uc3QgaXRlbVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS5pbm5lckhUTUwgPSBlbGVtZW50LnByaW9yaXR5O1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Ob3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Ob3RlLmlubmVySFRNTCA9IGVsZW1lbnQubm90ZTtcblxuXG5cbiBcblxuICAgICAgICBjb25zdCBpdGVtQnRuID0gY3JlYXRlQnV0dG9uKGVsZW1lbnQpO1xuICAgICAgICAgICAgaXRlbUJ0bi5pbm5lckhUTUwgPSAnLSdcbiAgICAgICAgICAgIGl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlSXRlbUJ0bicpO1xuXG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbUJ0bik7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbUR1ZSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbVByaW9yaXR5KTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtTm90ZSk7XG5cblxuICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMCl7XG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMSl7XG4gICAgICAgICAgICBkb2luZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc3RhdHVzID09IDIpe1xuICAgICAgICAgICAgZG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfSk7XG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oZWxlbWVudCl7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidG4udGl0bGUgPSBlbGVtZW50LnRpdGxlO1xuICAgIGNvbnNvbGUubG9nKGJ0bi50aXRsZSlcbiAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCl7ZGVsZXRlSXRlbShidG4udGl0bGUsICdzYXZlZEl0ZW1zJyl9XG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuXG5mdW5jdGlvbiBjbGVhcm5Db250YWluZXJzKHRvZG8sIGRvaW5nLCBkb25lKSB7XG4gICAgd2hpbGUgKHRvZG8uZmlyc3RDaGlsZCkge1xuICAgICAgICB0b2RvLnJlbW92ZUNoaWxkKHRvZG8uZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvaW5nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9pbmcucmVtb3ZlQ2hpbGQoZG9pbmcuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvbmUuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb25lLnJlbW92ZUNoaWxkKGRvbmUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQge3JlZnJlc2hEaXNwbGF5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3VwZGF0ZURPTS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==