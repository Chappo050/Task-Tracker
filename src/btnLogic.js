import * as storage from './savingStorage';
import {createItem} from './addItemFormManager';

function loadButtons() {
    const addItemBtn = document.getElementById('addItemBtn')
    addItemBtn.addEventListener('click', () => (createItem(storage.getIndex(), storage.getItems(), true)) )

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


export {loadButtons, closeForm}