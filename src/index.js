import './style.css';
import { createItem } from './itemManager';
import { loadButtons } from './btnLogic';

function component(){
    loadButtons(createItem);
}

component();