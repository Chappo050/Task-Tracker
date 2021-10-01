import {createNewItem} from './addItemFormManager';
import {addProject, deleteProject} from './projectHandling';

function loadButtons() {
    const addItemBtn = document.getElementById('addItemBtn')
    addItemBtn.addEventListener('click', () => (createNewItem('savedItems')) )

    const popupAdd = document.getElementById('popupAdd')
    popupAdd.addEventListener('click', openForm);

    const closeBtn = document.getElementById('closeBtn')
    closeBtn.addEventListener('click', closeForm);

    const projectList = document.getElementById("myDropdownBtn");
    projectList.addEventListener('click', toggleProjectList);

    const addProjectBtn = document.getElementById('AddProject');
    addProjectBtn.addEventListener('click', addProject);

    const deleteProjectBtn = document.getElementById('deleteProject');
    deleteProjectBtn.addEventListener('click', deleteProject)
}

function openForm() {
    document.getElementById("myForm").style.display = "block";

  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 



/* -------------------------------------
--------------DROPDOWN BOX STUFF--------
--------------------------------------*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleProjectList() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 





export {loadButtons, closeForm, toggleProjectList}
