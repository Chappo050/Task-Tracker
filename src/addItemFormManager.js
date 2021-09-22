import { ToDo } from "./TDObj"; 
import {refreshDisplay} from "./updateDOM";
import {closeForm} from "./btnLogic";
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
    const newItem = new ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value, index);

    itemArray.push(newItem);

    refreshDisplay(itemArray);

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
    closeForm();
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
    refreshDisplay(itemArray)
}


export {createItem, deleteItem}