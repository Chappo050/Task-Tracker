/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************!*\
  !*** ./src/updateDOM.js ***!
  \**************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlRE9NLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy91cGRhdGVET00uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmZ1bmN0aW9uIHJlZnJlc2hEaXNwbGF5KGFycmF5KSB7XG4gICAgZGlzcGxheVREKGFycmF5KTtcbn1cblxuLy9BZGRzIGEgbmV3IHRvIGRvIGNhcmQgdG8gdGhlIGN1cnJlbnQgcHJvamVjdFxuZnVuY3Rpb24gZGlzcGxheVREKGFycmF5KSB7XG5cbiAgICAvL2NsZWFyIGFsbCBpdGVtc1xuICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRvaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvaW5nQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZG9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb25lQ29udGFpbmVyJyk7XG5cbiAgICBjbGVhcm5Db250YWluZXJzKHRvRG9Db250YWluZXIsIGRvaW5nQ29udGFpbmVyLCBkb25lQ29udGFpbmVyKTtcblxuICAgIC8vYWRkIGFsbCBpdGVtcyBiYWNrIGluXG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgXG4gICAgICAgIC8vSXRlbXMgZGl2XG4gICAgICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3Q2FyZC5jbGFzc0xpc3QuYWRkKCdUREl0ZW0nKTtcblxuICAgICAgICAvL0FkZCBlYWNoIHNlY3Rpb24gb2YgdGhlIG5ldyBpdGVtIGluc2lkZSB0aGVpciBvd24gZGl2c1xuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVRpdGxlLmlubmVySFRNTCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbURlc2MuaW5uZXJIVE1MID0gZWxlbWVudC5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBpdGVtRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EdWUuaW5uZXJIVE1MID0gZWxlbWVudC5kdWU7XG5cbiAgICAgICAgY29uc3QgaXRlbVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS5pbm5lckhUTUwgPSBlbGVtZW50LnByaW9yaXR5O1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Ob3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Ob3RlLmlubmVySFRNTCA9IGVsZW1lbnQubm90ZTtcblxuICAgICAgICBjb25zdCBpdGVtQnRuID0gZWxlbWVudC5jcmVhdGVCdG4oKTtcbiAgICAgICAgICAgIGl0ZW1CdG4uaW5uZXJIVE1MID0gJy0nXG4gICAgICAgICAgICBpdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUl0ZW1CdG4nKTtcblxuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1CdG4pO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1EdWUpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbU5vdGUpO1xuXG5cbiAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09IDApe1xuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc3RhdHVzID09IDEpe1xuICAgICAgICAgICAgZG9pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50LnN0YXR1cyA9PSAyKXtcbiAgICAgICAgICAgIGRvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH0pO1xuXG5cbn1cblxuZnVuY3Rpb24gY2xlYXJuQ29udGFpbmVycyh0b2RvLCBkb2luZywgZG9uZSkge1xuICAgIHdoaWxlICh0b2RvLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdG9kby5yZW1vdmVDaGlsZCh0b2RvLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHdoaWxlIChkb2luZy5maXJzdENoaWxkKSB7XG4gICAgICAgIGRvaW5nLnJlbW92ZUNoaWxkKGRvaW5nLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHdoaWxlIChkb25lLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9uZS5yZW1vdmVDaGlsZChkb25lLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtyZWZyZXNoRGlzcGxheX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9