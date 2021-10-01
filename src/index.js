import './style.css';
import { createAllItems} from './addItemFormManager';
import { loadButtons } from './btnLogic';
import * as storage from './savingStorage';


function component(){
    //load array
    createAllItems()
    loadButtons();

  
}

component();
