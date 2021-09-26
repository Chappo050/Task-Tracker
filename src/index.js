import './style.css';
import { createAllItems, createItem } from './addItemFormManager';
import { loadButtons } from './btnLogic';
import * as storage from './savingStorage';


const saveString = 'savedItems';

function component(){
    //load array
    console.log('loading array');
    storage.setItems(storage.getSavedProjects(saveString));
    console.log(storage.getItems());
    loadButtons();
    createAllItems(storage.getIndex(), storage.getItems())
}

component();
