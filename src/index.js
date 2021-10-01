import './style.css';
import { createAllItems} from './addItemFormManager';
import { loadButtons } from './btnLogic';
import * as storage from './savingStorage';


function component(){
    //load array
    const index = storage.getCurrentIndex()
    loadButtons();
    const initialProject = storage.getSavedProjects()[index]

    if (initialProject) {
        createAllItems(initialProject.items)
    }
    else{
        console.log('No project to load. Please create one')
    }

}

component();
