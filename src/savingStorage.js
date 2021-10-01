let itemArray = [];
let projectArray = []
const projectStorageString = 'savedProjects';

//Stolen code that allows the saving of objects to local storage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
//Stolen code that allows the getting of objects to local storage
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

function setSavedItems(string, array) {
    if (array) {
        localStorage.setObj(string, array) //Key is not the obj key but the key to save shit under
        };
}

function setSavedProjects(array) {
    if (array) {
        localStorage.setObj(projectStorageString, array) //Key is not the obj key but the key to save shit under
        };
}
function getSavedProjects() {

    if (localStorage.getObj(projectStorageString)){
        return localStorage.getObj(projectStorageString);
    }

    else{
        console.log('nothing to return');
        return itemArray;
    }
 //Acces the key the library has been saved to
}

function getSavedItems(string) {

    if (localStorage.getObj(string)){
        return localStorage.getObj(string);
    }

    else{
        return itemArray;
    }
 //Acces the key the library has been saved to
}

function getItems(){
    return itemArray
}


function setItems(array){
    itemArray = array;
}

function getProjects(){
    return projectArray
}

function setProjects(array){
    projectArray = array;
}


export {getSavedProjects, setSavedProjects, setSavedItems, getSavedItems, getItems, getProjects, setItems, setProjects}