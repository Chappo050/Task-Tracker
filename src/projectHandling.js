import * as storage from './savingStorage';
import { ToDo, ProjectList } from "./TDObj"; 

function addProject() {
    const newName = prompt('Please enter new projects name:', "New Project");

    //add a new project if the name is unique
    if (!checkName(newName)) {
        const newProject = new ProjectList()
        let projectArray = storage.getSavedProjects();
        newProject.name = newName;
        projectArray.push(newProject);
        storage.setSavedProjects(projectArray);
    }
    else{
        alert('Clone found, please change the name of your project');
        
    }
    

}

function checkName(name){
    const projectArray = storage.getSavedProjects();
    const index = projectArray.findIndex( item => item.name === name );
    console.log(projectArray[index]);
    //Return an error if a match is found, otherwise add a new project
    if (projectArray[index]) {
        console.log('Returing true');
        return true;
    }
    else{
        console.log('Returing false, No match found');
        return false
    }

}

export {addProject}