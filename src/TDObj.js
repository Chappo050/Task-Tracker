import {deleteItem} from "./addItemFormManager"

function ToDo(title, status, description, due, priority, note, index){
       
       const obj = this;
       
        this.title = title;
        this.status = status;
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.note = note;
        this.index = index;



        // Within the function, use obj to reference the instance, not this
        this.createBtn = function() {
                var btn   = document.createElement('button');
                btn.type  = 'button'
                btn.index  = obj.index;
                btn.onclick = function() {
                        deleteItem(btn.index)
        };
        return btn;
      };

}
export {ToDo}