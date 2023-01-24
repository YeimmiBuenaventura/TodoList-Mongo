import React from "react";

import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  const renderedList = list.map(
    (item) => (
      <Todo
        title={item.title}
        completed={item.completed}
        removeTodoItemProp={(e) => removeTodoListProp(item._id)}
        editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
        key={item.title}
      />
    )
  );
  return (
    <div className="ui grid center aligned" style={{backgroundColor: 'rgba(255,255,255,.3)', borderRadius: 20, padding: 20}}>
      {renderedList}
    </div>
  );
};

export default List;