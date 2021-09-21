import './style.css';
import { createItem } from './addItemFormManager';
import { loadButtons } from './btnLogic';

function component(){
    loadButtons(createItem);
}

component();