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
function ToDo(title, status, description, due, priority, note){
        this.title = title;
        this.status = status;
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.note = note;
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


function deleteTDBtn(item) {
    
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
        const newItem = document.createElement('div');
        newItem.classList.add('TDItem');

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

        newItem.appendChild(itemTitle);
        newItem.appendChild(itemDesc);
        newItem.appendChild(itemDue);
        newItem.appendChild(itemPriority);
        newItem.appendChild(itemNote);


        if (element.status == 0){
            toDoContainer.appendChild(newItem)
        }
        else if (element.status == 1){
            doingContainer.appendChild(newItem)
        }
        else if (element.status == 2){
            doneContainer.appendChild(newItem)
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/addItemFormManager.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItem": () => (/* binding */ createItem)
/* harmony export */ });
/* harmony import */ var _TDObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TDObj */ "./src/TDObj.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");
/* harmony import */ var _btnLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnLogic */ "./src/btnLogic.js");
 


let itemArray = [];


function createItem() {
    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
  
    const priorityValue = handlePriority(priority.value);
    //create new object using the form
    const newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value);

    itemArray.push(newItem);
    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(itemArray);

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkSXRlbUZvcm1NYW5hZ2VyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMxRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ1k7QUFDTjtBQUNyQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0NBQUk7O0FBRTVCO0FBQ0EsSUFBSSwwREFBYzs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1RET2JqLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9idG5Mb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdXBkYXRlRE9NLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9hZGRJdGVtRm9ybU1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVG9Ebyh0aXRsZSwgc3RhdHVzLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZTtcbn1cblxuXG5leHBvcnQge1RvRG99IiwiXG5mdW5jdGlvbiBsb2FkQnV0dG9ucyhURExvZ2ljKSB7XG4gICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRJdGVtQnRuJylcbiAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVERMb2dpYylcblxuICAgIGNvbnN0IHBvcHVwQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQWRkJylcbiAgICBwb3B1cEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQnRuJylcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XG59XG5cblxuZnVuY3Rpb24gZGVsZXRlVERCdG4oaXRlbSkge1xuICAgIFxufVxuXG5mdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gXG5cblxuZXhwb3J0IHtsb2FkQnV0dG9ucywgY2xvc2VGb3JtfSIsIlxuZnVuY3Rpb24gcmVmcmVzaERpc3BsYXkoYXJyYXkpIHtcbiAgICBkaXNwbGF5VEQoYXJyYXkpO1xufVxuXG4vL0FkZHMgYSBuZXcgdG8gZG8gY2FyZCB0byB0aGUgY3VycmVudCBwcm9qZWN0XG5mdW5jdGlvbiBkaXNwbGF5VEQoYXJyYXkpIHtcblxuICAgIC8vY2xlYXIgYWxsIGl0ZW1zXG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZG9pbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9pbmdDb250YWluZXInKTtcbiAgICBjb25zdCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmVDb250YWluZXInKTtcblxuICAgIGNsZWFybkNvbnRhaW5lcnModG9Eb0NvbnRhaW5lciwgZG9pbmdDb250YWluZXIsIGRvbmVDb250YWluZXIpO1xuXG4gICAgLy9hZGQgYWxsIGl0ZW1zIGJhY2sgaW5cbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICBcbiAgICAgICAgLy9JdGVtcyBkaXZcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoJ1RESXRlbScpO1xuXG4gICAgICAgIC8vQWRkIGVhY2ggc2VjdGlvbiBvZiB0aGUgbmV3IGl0ZW0gaW5zaWRlIHRoZWlyIG93biBkaXZzXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtVGl0bGUuaW5uZXJIVE1MID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGVzYy5pbm5lckhUTUwgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUR1ZS5pbm5lckhUTUwgPSBlbGVtZW50LmR1ZTtcblxuICAgICAgICBjb25zdCBpdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVByaW9yaXR5LmlubmVySFRNTCA9IGVsZW1lbnQucHJpb3JpdHk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbU5vdGUuaW5uZXJIVE1MID0gZWxlbWVudC5ub3RlO1xuXG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoaXRlbUR1ZSk7XG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaW9yaXR5KTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChpdGVtTm90ZSk7XG5cblxuICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMCl7XG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMSl7XG4gICAgICAgICAgICBkb2luZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJdGVtKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc3RhdHVzID09IDIpe1xuICAgICAgICAgICAgZG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJdGVtKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfSk7XG5cblxufVxuXG5mdW5jdGlvbiBjbGVhcm5Db250YWluZXJzKHRvZG8sIGRvaW5nLCBkb25lKSB7XG4gICAgd2hpbGUgKHRvZG8uZmlyc3RDaGlsZCkge1xuICAgICAgICB0b2RvLnJlbW92ZUNoaWxkKHRvZG8uZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvaW5nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9pbmcucmVtb3ZlQ2hpbGQoZG9pbmcuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvbmUuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb25lLnJlbW92ZUNoaWxkKGRvbmUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQge3JlZnJlc2hEaXNwbGF5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9URE9ialwiOyBcbmltcG9ydCB7cmVmcmVzaERpc3BsYXl9IGZyb20gXCIuL3VwZGF0ZURPTVwiO1xuaW1wb3J0IHtjbG9zZUZvcm19IGZyb20gXCIuL2J0bkxvZ2ljXCI7XG5sZXQgaXRlbUFycmF5ID0gW107XG5cblxuZnVuY3Rpb24gY3JlYXRlSXRlbSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0aXRsZScpWzBdO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzdGF0dXMnKVswXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdkZXNjJylbMF07XG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2R1ZScpWzBdO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3ByaW9yaXR5JylbMF07XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdub3RlcycpWzBdO1xuICBcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gaGFuZGxlUHJpb3JpdHkocHJpb3JpdHkudmFsdWUpO1xuICAgIC8vY3JlYXRlIG5ldyBvYmplY3QgdXNpbmcgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdJdGVtID0gbmV3IFRvRG8odGl0bGUudmFsdWUsIHN0YXR1cy52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZS52YWx1ZSwgcHJpb3JpdHlWYWx1ZSwgbm90ZS52YWx1ZSk7XG5cbiAgICBpdGVtQXJyYXkucHVzaChuZXdJdGVtKTtcbiAgICByZWZyZXNoRGlzcGxheShpdGVtQXJyYXkpO1xuXG4gICAgY2xlYXJGb3JtKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3RlKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtKHRpdGxlLCBzdGF0dXMsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGUpe1xuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgc3RhdHVzLnZhbHVlID0gJyc7IFxuICAgIGRlc2MudmFsdWUgPSAnJzsgXG4gICAgZHVlLnZhbHVlID0gJyc7IFxuICAgIHByaW9yaXR5LnZhbHVlID0gJyc7XG4gICAgbm90ZS52YWx1ZSA9ICcnO1xuICAgIGNsb3NlRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmlvcml0eSh2YWx1ZSl7XG4gICAgaWYgKHZhbHVlID09IDApIHtyZXR1cm4gXCJMT1dcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAxKSB7cmV0dXJuXCJNRURcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAyKSB7cmV0dXJuIFwiSElHSFwifVxufVxuXG5leHBvcnQge2NyZWF0ZUl0ZW19Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9