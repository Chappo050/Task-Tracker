function ProjectList(name = 'New Project', items = []){
        this.name = name;
        this.items = items;
}


function ToDo(title, status, description, due, priority, note){
       
        this.title = title;
        this.status = status;
        this.description = description;
        this.due = due;
        this.note = note;
        this.priority = priority;

}
export {ProjectList, ToDo}