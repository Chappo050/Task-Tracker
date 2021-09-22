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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/TDObj.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVERPYmouYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrREFBVTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQitCO0FBQ1k7QUFDTjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUFJOztBQUU1Qjs7QUFFQSxJQUFJLDBEQUFjOztBQUVsQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBUztBQUNiOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDL0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1RET2JqLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9hZGRJdGVtRm9ybU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2J0bkxvZ2ljLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy91cGRhdGVET00uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVsZXRlSXRlbX0gZnJvbSBcIi4vYWRkSXRlbUZvcm1NYW5hZ2VyXCJcblxuZnVuY3Rpb24gVG9Ebyh0aXRsZSwgc3RhdHVzLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZSwgaW5kZXgpe1xuICAgICAgIFxuICAgICAgIGNvbnN0IG9iaiA9IHRoaXM7XG4gICAgICAgXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuXG5cblxuICAgICAgICAvLyBXaXRoaW4gdGhlIGZ1bmN0aW9uLCB1c2Ugb2JqIHRvIHJlZmVyZW5jZSB0aGUgaW5zdGFuY2UsIG5vdCB0aGlzXG4gICAgICAgIHRoaXMuY3JlYXRlQnRuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ0biAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYnRuLnR5cGUgID0gJ2J1dHRvbidcbiAgICAgICAgICAgICAgICBidG4uaW5kZXggID0gb2JqLmluZGV4O1xuICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtKGJ0bi5pbmRleClcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICAgIH07XG5cbn1cbmV4cG9ydCB7VG9Eb30iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVERPYmpcIjsgXG5pbXBvcnQge3JlZnJlc2hEaXNwbGF5fSBmcm9tIFwiLi91cGRhdGVET01cIjtcbmltcG9ydCB7Y2xvc2VGb3JtfSBmcm9tIFwiLi9idG5Mb2dpY1wiO1xubGV0IGl0ZW1BcnJheSA9IFtdO1xubGV0IGluZGV4ID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlSXRlbSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0aXRsZScpWzBdO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzdGF0dXMnKVswXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdkZXNjJylbMF07XG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2R1ZScpWzBdO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3ByaW9yaXR5JylbMF07XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdub3RlcycpWzBdO1xuICAgIFxuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBoYW5kbGVQcmlvcml0eShwcmlvcml0eS52YWx1ZSk7XG4gICAgLy9jcmVhdGUgbmV3IG9iamVjdCB1c2luZyB0aGUgZm9ybVxuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgVG9Ebyh0aXRsZS52YWx1ZSwgc3RhdHVzLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlLnZhbHVlLCBwcmlvcml0eVZhbHVlLCBub3RlLnZhbHVlLCBpbmRleCk7XG5cbiAgICBpdGVtQXJyYXkucHVzaChuZXdJdGVtKTtcblxuICAgIHJlZnJlc2hEaXNwbGF5KGl0ZW1BcnJheSk7XG5cbiAgICBjbGVhckZvcm0odGl0bGUsIHN0YXR1cywgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIG5vdGUpO1xuICAgIGluZGV4Kys7XG59XG5cblxuZnVuY3Rpb24gY2xlYXJGb3JtKHRpdGxlLCBzdGF0dXMsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGUpe1xuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgc3RhdHVzLnZhbHVlID0gJyc7IFxuICAgIGRlc2MudmFsdWUgPSAnJzsgXG4gICAgZHVlLnZhbHVlID0gJyc7IFxuICAgIHByaW9yaXR5LnZhbHVlID0gJyc7XG4gICAgbm90ZS52YWx1ZSA9ICcnO1xuICAgIGNsb3NlRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmlvcml0eSh2YWx1ZSl7XG4gICAgaWYgKHZhbHVlID09IDApIHtyZXR1cm4gXCJMT1dcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAxKSB7cmV0dXJuXCJNRURcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAyKSB7cmV0dXJuIFwiSElHSFwifVxufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtKGluZGV4KXtcbiAgICBjb25zdCByZW1vdmVJbmRleCA9IGl0ZW1BcnJheS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5pbmRleCA9PT0gaW5kZXggKTtcbiAgICBjb25zb2xlLmxvZyhgZGVsZXRpbmcgaW5kZXggJHtpbmRleH1gKVxuICAgIC8vIHJlbW92ZSBvYmplY3RcbiAgICBjb25zb2xlLmxvZyhpdGVtQXJyYXkubGVuZ3RoKTtcbiAgICBpdGVtQXJyYXkuc3BsaWNlKCByZW1vdmVJbmRleCwgMSApO1xuICAgIGNvbnNvbGUubG9nKGl0ZW1BcnJheS5sZW5ndGgpO1xuICAgIHJlZnJlc2hEaXNwbGF5KGl0ZW1BcnJheSlcbn1cblxuXG5leHBvcnQge2NyZWF0ZUl0ZW0sIGRlbGV0ZUl0ZW19IiwiXG5mdW5jdGlvbiBsb2FkQnV0dG9ucyhURExvZ2ljKSB7XG4gICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRJdGVtQnRuJylcbiAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVERMb2dpYylcblxuICAgIGNvbnN0IHBvcHVwQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQWRkJylcbiAgICBwb3B1cEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQnRuJylcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgfVxuICBcbiAgZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBcblxuXG5leHBvcnQge2xvYWRCdXR0b25zLCBjbG9zZUZvcm19IiwiXG5mdW5jdGlvbiByZWZyZXNoRGlzcGxheShhcnJheSkge1xuICAgIGRpc3BsYXlURChhcnJheSk7XG59XG5cbi8vQWRkcyBhIG5ldyB0byBkbyBjYXJkIHRvIHRoZSBjdXJyZW50IHByb2plY3RcbmZ1bmN0aW9uIGRpc3BsYXlURChhcnJheSkge1xuXG4gICAgLy9jbGVhciBhbGwgaXRlbXNcbiAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Db250YWluZXInKTtcbiAgICBjb25zdCBkb2luZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2luZ0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRvbmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uZUNvbnRhaW5lcicpO1xuXG4gICAgY2xlYXJuQ29udGFpbmVycyh0b0RvQ29udGFpbmVyLCBkb2luZ0NvbnRhaW5lciwgZG9uZUNvbnRhaW5lcik7XG5cbiAgICAvL2FkZCBhbGwgaXRlbXMgYmFjayBpblxuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgIFxuICAgICAgICAvL0l0ZW1zIGRpdlxuICAgICAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NhcmQuY2xhc3NMaXN0LmFkZCgnVERJdGVtJyk7XG5cbiAgICAgICAgLy9BZGQgZWFjaCBzZWN0aW9uIG9mIHRoZSBuZXcgaXRlbSBpbnNpZGUgdGhlaXIgb3duIGRpdnNcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1UaXRsZS5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EZXNjLmlubmVySFRNTCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgaXRlbUR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRHVlLmlubmVySFRNTCA9IGVsZW1lbnQuZHVlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtUHJpb3JpdHkuaW5uZXJIVE1MID0gZWxlbWVudC5wcmlvcml0eTtcblxuICAgICAgICBjb25zdCBpdGVtTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtTm90ZS5pbm5lckhUTUwgPSBlbGVtZW50Lm5vdGU7XG5cbiAgICAgICAgY29uc3QgaXRlbUJ0biA9IGVsZW1lbnQuY3JlYXRlQnRuKCk7XG4gICAgICAgICAgICBpdGVtQnRuLmlubmVySFRNTCA9ICctJ1xuICAgICAgICAgICAgaXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGVJdGVtQnRuJyk7XG5cbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtQnRuKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtRHVlKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtUHJpb3JpdHkpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1Ob3RlKTtcblxuXG4gICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PSAwKXtcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50LnN0YXR1cyA9PSAxKXtcbiAgICAgICAgICAgIGRvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMil7XG4gICAgICAgICAgICBkb25lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9KTtcblxuXG59XG5cbmZ1bmN0aW9uIGNsZWFybkNvbnRhaW5lcnModG9kbywgZG9pbmcsIGRvbmUpIHtcbiAgICB3aGlsZSAodG9kby5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvZG8ucmVtb3ZlQ2hpbGQodG9kby5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoZG9pbmcuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb2luZy5yZW1vdmVDaGlsZChkb2luZy5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoZG9uZS5maXJzdENoaWxkKSB7XG4gICAgICAgIGRvbmUucmVtb3ZlQ2hpbGQoZG9uZS5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVmcmVzaERpc3BsYXl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvVERPYmouanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=