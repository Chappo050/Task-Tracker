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
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _addItemFormManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addItemFormManager */ "./src/addItemFormManager.js");


function ToDo(title, status, description, due, priority, note, index){
       
       const obj = this;
       
        this.title = title;
        this.status = status;
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.note = note;
        this.index = index;



        // Within the function, use obj to reference the instance, not this
        this.createBtn = function() {
                var btn   = document.createElement('button');
                btn.type  = 'button'
                btn.index  = obj.index;
                btn.onclick = function() {
                        (0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(btn.index)
        };
        return btn;
      };

}


/***/ }),

/***/ "./src/addItemFormManager.js":
/*!***********************************!*\
  !*** ./src/addItemFormManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItem": () => (/* binding */ createItem),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem)
/* harmony export */ });
/* harmony import */ var _TDObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TDObj */ "./src/TDObj.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");
/* harmony import */ var _btnLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnLogic */ "./src/btnLogic.js");
 


let itemArray = [];
let index = 0;

function createItem() {
    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
    
    const priorityValue = handlePriority(priority.value);
    //create new object using the form
    const newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value, index);

    itemArray.push(newItem);

    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(itemArray);

    clearForm(title, status, description, due, priority, note);
    index++;
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

function deleteItem(index){
    const removeIndex = itemArray.findIndex( item => item.index === index );
    console.log(`deleting index ${index}`)
    // remove object
    console.log(itemArray.length);
    itemArray.splice( removeIndex, 1 );
    console.log(itemArray.length);
    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(itemArray)
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

function loadButtons(TDLogic) {
    const addItemBtn = document.getElementById('addItemBtn')
    addItemBtn.addEventListener('click', TDLogic)

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

/***/ "./src/updateDOM.js":
/*!**************************!*\
  !*** ./src/updateDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refreshDisplay": () => (/* binding */ refreshDisplay)
/* harmony export */ });

function refreshDisplay(array) {
    displayTD(array);
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

        const itemBtn = element.createBtn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkSXRlbUZvcm1NYW5hZ2VyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQVU7QUFDbEM7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0IrQjtBQUNZO0FBQ047QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3Q0FBSTs7QUFFNUI7O0FBRUEsSUFBSSwwREFBYzs7QUFFbEI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQy9FQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9URE9iai5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYWRkSXRlbUZvcm1NYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9idG5Mb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdXBkYXRlRE9NLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlbGV0ZUl0ZW19IGZyb20gXCIuL2FkZEl0ZW1Gb3JtTWFuYWdlclwiXG5cbmZ1bmN0aW9uIFRvRG8odGl0bGUsIHN0YXR1cywgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIG5vdGUsIGluZGV4KXtcbiAgICAgICBcbiAgICAgICBjb25zdCBvYmogPSB0aGlzO1xuICAgICAgIFxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuXG5cbiAgICAgICAgLy8gV2l0aGluIHRoZSBmdW5jdGlvbiwgdXNlIG9iaiB0byByZWZlcmVuY2UgdGhlIGluc3RhbmNlLCBub3QgdGhpc1xuICAgICAgICB0aGlzLmNyZWF0ZUJ0biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBidG4gICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi50eXBlICA9ICdidXR0b24nXG4gICAgICAgICAgICAgICAgYnRuLmluZGV4ICA9IG9iai5pbmRleDtcbiAgICAgICAgICAgICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbShidG4uaW5kZXgpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBidG47XG4gICAgICB9O1xuXG59XG5leHBvcnQge1RvRG99IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RET2JqXCI7IFxuaW1wb3J0IHtyZWZyZXNoRGlzcGxheX0gZnJvbSBcIi4vdXBkYXRlRE9NXCI7XG5pbXBvcnQge2Nsb3NlRm9ybX0gZnJvbSBcIi4vYnRuTG9naWNcIjtcbmxldCBpdGVtQXJyYXkgPSBbXTtcbmxldCBpbmRleCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGl0bGUnKVswXTtcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnc3RhdHVzJylbMF07XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnZGVzYycpWzBdO1xuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdkdWUnKVswXTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdwcmlvcml0eScpWzBdO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnbm90ZXMnKVswXTtcbiAgICBcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gaGFuZGxlUHJpb3JpdHkocHJpb3JpdHkudmFsdWUpO1xuICAgIC8vY3JlYXRlIG5ldyBvYmplY3QgdXNpbmcgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdJdGVtID0gbmV3IFRvRG8odGl0bGUudmFsdWUsIHN0YXR1cy52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZS52YWx1ZSwgcHJpb3JpdHlWYWx1ZSwgbm90ZS52YWx1ZSwgaW5kZXgpO1xuXG4gICAgaXRlbUFycmF5LnB1c2gobmV3SXRlbSk7XG5cbiAgICByZWZyZXNoRGlzcGxheShpdGVtQXJyYXkpO1xuXG4gICAgY2xlYXJGb3JtKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3RlKTtcbiAgICBpbmRleCsrO1xufVxuXG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSh0aXRsZSwgc3RhdHVzLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBub3RlKXtcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIHN0YXR1cy52YWx1ZSA9ICcnOyBcbiAgICBkZXNjLnZhbHVlID0gJyc7IFxuICAgIGR1ZS52YWx1ZSA9ICcnOyBcbiAgICBwcmlvcml0eS52YWx1ZSA9ICcnO1xuICAgIG5vdGUudmFsdWUgPSAnJztcbiAgICBjbG9zZUZvcm0oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJpb3JpdHkodmFsdWUpe1xuICAgIGlmICh2YWx1ZSA9PSAwKSB7cmV0dXJuIFwiTE9XXCJ9XG4gICAgZWxzZSBpZiAodmFsdWUgPT0gMSkge3JldHVyblwiTUVEXCJ9XG4gICAgZWxzZSBpZiAodmFsdWUgPT0gMikge3JldHVybiBcIkhJR0hcIn1cbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbShpbmRleCl7XG4gICAgY29uc3QgcmVtb3ZlSW5kZXggPSBpdGVtQXJyYXkuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uaW5kZXggPT09IGluZGV4ICk7XG4gICAgY29uc29sZS5sb2coYGRlbGV0aW5nIGluZGV4ICR7aW5kZXh9YClcbiAgICAvLyByZW1vdmUgb2JqZWN0XG4gICAgY29uc29sZS5sb2coaXRlbUFycmF5Lmxlbmd0aCk7XG4gICAgaXRlbUFycmF5LnNwbGljZSggcmVtb3ZlSW5kZXgsIDEgKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtQXJyYXkubGVuZ3RoKTtcbiAgICByZWZyZXNoRGlzcGxheShpdGVtQXJyYXkpXG59XG5cblxuZXhwb3J0IHtjcmVhdGVJdGVtLCBkZWxldGVJdGVtfSIsIlxuZnVuY3Rpb24gbG9hZEJ1dHRvbnMoVERMb2dpYykge1xuICAgIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSXRlbUJ0bicpXG4gICAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRETG9naWMpXG5cbiAgICBjb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cEFkZCcpXG4gICAgcG9wdXBBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ0bicpXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xufVxuXG5mdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gXG5cblxuZXhwb3J0IHtsb2FkQnV0dG9ucywgY2xvc2VGb3JtfSIsIlxuZnVuY3Rpb24gcmVmcmVzaERpc3BsYXkoYXJyYXkpIHtcbiAgICBkaXNwbGF5VEQoYXJyYXkpO1xufVxuXG4vL0FkZHMgYSBuZXcgdG8gZG8gY2FyZCB0byB0aGUgY3VycmVudCBwcm9qZWN0XG5mdW5jdGlvbiBkaXNwbGF5VEQoYXJyYXkpIHtcblxuICAgIC8vY2xlYXIgYWxsIGl0ZW1zXG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZG9pbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9pbmdDb250YWluZXInKTtcbiAgICBjb25zdCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmVDb250YWluZXInKTtcblxuICAgIGNsZWFybkNvbnRhaW5lcnModG9Eb0NvbnRhaW5lciwgZG9pbmdDb250YWluZXIsIGRvbmVDb250YWluZXIpO1xuXG4gICAgLy9hZGQgYWxsIGl0ZW1zIGJhY2sgaW5cbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICBcbiAgICAgICAgLy9JdGVtcyBkaXZcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdDYXJkLmNsYXNzTGlzdC5hZGQoJ1RESXRlbScpO1xuXG4gICAgICAgIC8vQWRkIGVhY2ggc2VjdGlvbiBvZiB0aGUgbmV3IGl0ZW0gaW5zaWRlIHRoZWlyIG93biBkaXZzXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtVGl0bGUuaW5uZXJIVE1MID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGVzYy5pbm5lckhUTUwgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUR1ZS5pbm5lckhUTUwgPSBlbGVtZW50LmR1ZTtcblxuICAgICAgICBjb25zdCBpdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVByaW9yaXR5LmlubmVySFRNTCA9IGVsZW1lbnQucHJpb3JpdHk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbU5vdGUuaW5uZXJIVE1MID0gZWxlbWVudC5ub3RlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1CdG4gPSBlbGVtZW50LmNyZWF0ZUJ0bigpO1xuICAgICAgICAgICAgaXRlbUJ0bi5pbm5lckhUTUwgPSAnLSdcbiAgICAgICAgICAgIGl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlSXRlbUJ0bicpO1xuXG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbUJ0bik7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbUR1ZSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbVByaW9yaXR5KTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtTm90ZSk7XG5cblxuICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMCl7XG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMSl7XG4gICAgICAgICAgICBkb2luZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc3RhdHVzID09IDIpe1xuICAgICAgICAgICAgZG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfSk7XG5cblxufVxuXG5mdW5jdGlvbiBjbGVhcm5Db250YWluZXJzKHRvZG8sIGRvaW5nLCBkb25lKSB7XG4gICAgd2hpbGUgKHRvZG8uZmlyc3RDaGlsZCkge1xuICAgICAgICB0b2RvLnJlbW92ZUNoaWxkKHRvZG8uZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvaW5nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9pbmcucmVtb3ZlQ2hpbGQoZG9pbmcuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvbmUuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb25lLnJlbW92ZUNoaWxkKGRvbmUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQge3JlZnJlc2hEaXNwbGF5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FkZEl0ZW1Gb3JtTWFuYWdlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==