let itemArray = [];
let index = 0;

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

function getSavedItems(string) {
    return localStorage.getObj(string); //Acces the key the library has been saved to
}

function getArray(){
    return itemArray
}

function getIndex(){
    return index
}

export {setSavedItems, getSavedItems, getArray, getIndex}