import './style.css';
import { createAllItems} from './addItemFormManager';
import { loadButtons } from './btnLogic';
import * as storage from './savingStorage';
import {refreshProjectList} from './updateDOM';


const saveString = 'savedItems';

function component(){
    //load array
    loadButtons();
    console.log(storage.getSavedItems(saveString));
    createAllItems(storage.getSavedItems(saveString), saveString)
    refreshProjectList();
}

component();
