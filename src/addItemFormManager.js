import { ToDo } from "./TDObj"; 
import {refreshDisplay} from "./updateDOM";
import {closeForm} from "./btnLogic";
import * as storage from './savingStorage';


const saveString = 'savedItems';

//loop through all items in the array and create (but not make new objects)
function createAllItems(index, array){
    if (array) {
        array.forEach(element => {
            createItem(index, array, false);
        });  
    }

}


function createItem(index, array, isNewItem) {
    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
    const priorityValue = handlePriority(priority.value);

    //create new object using the form
    if (isNewItem) {
        const newItem = new ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value, index);
        array.push(newItem);
        storage.setSavedProjects(saveString, array);
    }

    refreshDisplay(array);
    console.log(storage.getItems());
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
    const array = storage.getItems();
    const removeIndex = array.findIndex( item => item.index === index );
    console.log(`deleting index ${index}`)

    // remove object
    console.log(array.length);
    array.splice( removeIndex, 1 );
    console.log(array.length);
    refreshDisplay(array)
}


export {createItem, deleteItem, createAllItems}