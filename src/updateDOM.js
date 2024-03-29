import { createAllItems, deleteItem } from "./addItemFormManager";
import * as storage from './savingStorage';

function refreshDisplay(array) {
    clearContainers();
    displayTD(array);
    refreshProjectList();
}

//Adds a new to do card to the current project
function displayTD(array) {

    //clear all items
    const toDoContainer = document.getElementById('toDoContainer');
    const doingContainer = document.getElementById('doingContainer');
    const doneContainer = document.getElementById('doneContainer');

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



 

        const itemBtn = createButton(element);
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

function createButton(element){
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.title = element.title;
    btn.onclick = function(){deleteItem(btn.title, 'savedItems')}
    return btn;
}


function clearContainers() {

    const todo = document.getElementById('toDoContainer');
    const doing = document.getElementById('doingContainer');
    const done = document.getElementById('doneContainer');
   
    console.log('clearing!');
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

function refreshProjectList(){
    const projectArray = storage.getSavedProjects();
    const dropdown = document.getElementById('myDropdown');

    //clear list
    while (dropdown.firstChild) {
        dropdown.removeChild(dropdown.firstChild);
    }

    //add to list
    projectArray.forEach(element => {
        const projectName = element.name;

        const newLink = document.createElement('a');
        
        newLink.href = "#";
        newLink.id = projectName;
        newLink.innerHTML = projectName;
        
        newLink.addEventListener('click', () =>{onMenuClick(projectName)})

        dropdown.appendChild(newLink);
    });
}

function onMenuClick(projectName) {
    storage.setCurrentIndex(projectName);
    createAllItems()
}

export {refreshDisplay, refreshProjectList, clearContainers};