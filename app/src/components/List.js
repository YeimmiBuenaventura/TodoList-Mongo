import React from "react";

import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {

      // mapear la lista de las tareas y asi mismo utilizamos el key 
  //para que me seleccione un elemento en especifico y alli me dice el item que esta terminado
  //y el que no esta terminado 
    const renderedList = list.map((item) => (
            <Todo
                  title={item.title} //name of the task that is added in the input, nombre de la tarea que se añade en el input                         
                completed={item.completed} //the task when it is completed,a tarea cuando ya se completa                       
                removeTodoItemProp={(e) => removeTodoListProp(item._id)} //remove tasks, remover tareas
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)} //edit tasks
                key={item.title} //see which task has been deleted, added or modified
            />
        )
    );
    return (
        <div className="ui grid center aligned">
            
 
            {renderedList}
   
        </div>
    );
};

export default List;