import { ToDo } from "./TDObj"; 
import {refreshDisplay} from "./updateDOM";
import {closeForm} from "./btnLogic";
import * as storage from './savingStorage';

//loop through all items in the array and create (but not make new objects)
function createAllItems(currentProject){
    currentProject.forEach(item => {
        console.log(`the current length is ${currentProject.length}`)
        refreshDisplay(currentProject);
    });  
    }


function createNewItem() {
    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
    const priorityValue = handlePriority(priority.value);

    const index = storage.getCurrentIndex()
    let allSavedProjects = storage.getSavedProjects();
    let currentProjectItems = allSavedProjects[index].items;

    //create new object using the form
    var newItem = new ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value);
    currentProjectItems.push(newItem);
    allSavedProjects[index].items = currentProjectItems;
    storage.setSavedProjects(allSavedProjects);


    refreshDisplay(allSavedProjects[index].items);

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
    const index = storage.getCurrentIndex()
    let allSavedProjects = storage.getSavedProjects();
    let currentProjectItems = allSavedProjects[index].items;
    const removeTitle = currentProjectItems.findIndex( item => item.title === title );
    console.log(`deleting item ${title}`)

    // remove object
    console.log(currentProjectItems.length);
    currentProjectItems.splice( removeTitle, 1 );
    allSavedProjects[index].items = currentProjectItems;
    storage.setSavedProjects(allSavedProjects);
    refreshDisplay(allSavedProjects[index].items)
}


export {createNewItem, deleteItem, createAllItems}