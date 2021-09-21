
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

export {refreshDisplay};