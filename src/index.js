import './style.css';
import { createItem } from './addItemFormManager';
import { loadButtons } from './btnLogic';
import {getSavedItems, getArray, getIndex} from './savingStorage';


const saveString = 'savedItems';

function component(){
    let index = getIndex();
    let array = [];
    //load if there is an array
    if (getSavedItems(saveString.length > 0)) {
        array = getSavedItems(saveString);
        console.log(getArray());
        loadButtons(createItem(index, array));
    }
    //start a new array if empty
    else{
        console.log(getArray());
        loadButtons(createItem(index, array));
    }
    

}

component();
