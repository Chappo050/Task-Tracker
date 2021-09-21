import { ToDo } from "./TDObj"; 
import {refreshDisplay} from "./updateDOM";
import {closeForm} from "./btnLogic";
let itemArray = [];


function createItem() {
    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
  
    //create new object using the form
    const newItem = new ToDo(title.value, status.value, description.value, due.value, priority.value, note.value);

    itemArray.push(newItem);
    refreshDisplay(itemArray);

    clearForm(title, status, description, due, priority, note);
}

function clearForm(title, status, desc, due, priority, note){
    title.value = '';
    status.value = ''; 
    desc.value = ''; 
    due.value = ''; 
    priority.value = '';
    note.value = '';
    closeForm();
}

function getitemArray() {
    return itemArray;
}

export {createItem, getitemArray}