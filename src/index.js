import './style.css';
import { createAllItems} from './addItemFormManager';
import { loadButtons } from './btnLogic';
import * as storage from './savingStorage';


const saveString = 'savedItems';

function component(){
    //load array
    loadButtons();
    console.log(storage.getSavedProjects(saveString));
    createAllItems(storage.getSavedProjects(saveString), saveString)
}

component();
