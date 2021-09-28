import { ToDo } from "./TDObj"; 
import {refreshDisplay} from "./updateDOM";
import {closeForm} from "./btnLogic";
import * as storage from './savingStorage';


const saveString = 'savedItems';

//loop through all items in the array and create (but not make new objects)
function createAllItems(array){
    array.forEach(item => {
        console.log("hello")
        createItemsFromStorage(item);
    });  
    }

function createItemsFromStorage(item){
    const title = item.title;
    const status = item.status;
    const description = item.description;
    const due = item.due;
    const priority = item.priority;
    const note = item.note;
    const priorityValue = handlePriority(priority.value);

    let array = storage.getSavedProjects();

    console.log(title)
    var newItem = new ToDo(title, status, description, due, priorityValue, note);
    array.push(newItem);
    storage.setSavedProjects(saveString, array);


    refreshDisplay(array);
    console.log(storage.getSavedProjects());
}

function createNewItem() {

    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
    const priorityValue = handlePriority(priority.value);

    let array = storage.getSavedProjects();
    
    //create new object using the form

    console.log(title)
    var newItem = new ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value);
    array.push(newItem);
    storage.setSavedProjects(saveString, array);


    refreshDisplay(array);
    console.log(storage.getSavedProjects());
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

function handlePriority(value){
    if (value == 0) {return "LOW"}
    else if (value == 1) {return"MED"}
    else if (value == 2) {return "HIGH"}
}

function deleteItem(title){
    const array = storage.getItems();
    const removeTitle = array.findIndex( item => item.title === title );
    console.log(`deleting item ${title}`)

    // remove object
    console.log(array.length);
    array.splice( removeTitle, 1 );
    storage.setSavedProjects(saveString, array)
    console.log(array.length);
    refreshDisplay(array)
}


export {createNewItem, deleteItem, createAllItems}