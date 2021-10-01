let itemArray = [];
let currentIndex = 0;
const projectStorageString = 'savedProjects';

//Stolen code that allows the saving of objects to local storage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
//Stolen code that allows the getting of objects to local storage
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
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

function setCurrentIndex(newName) {
    //figure out a way to set the ID
    const allSavedProjects = getSavedProjects();
    const projectIndex = allSavedProjects.findIndex( item => item.name === newName );
    currentIndex = projectIndex;
}


function getCurrentIndex(){
    return currentIndex
}

export {getSavedProjects, setSavedProjects, getCurrentIndex, setCurrentIndex}