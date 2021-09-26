let itemArray = [];
let projectArray = []
let index = 0;

//Stolen code that allows the saving of objects to local storage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
//Stolen code that allows the getting of objects to local storage
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

function setSavedProjects(string, array) {
    if (array) {
        localStorage.setObj(string, array) //Key is not the obj key but the key to save shit under
        };
}

function getSavedProjects(string) {
    return localStorage.getObj(string); //Acces the key the library has been saved to
}

function getItems(){
    return itemArray
}

function getIndex(){
    return index
}

function getProjects(){
    return projectArray
}

function setProjects(array){
    projectArray = array;
}

function setItems(array){
    itemArray = array;
}

export {setSavedProjects, getSavedProjects, getItems, getIndex, getProjects, setItems, setProjects}