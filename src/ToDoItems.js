import React from "react";

function ToDoItem(props) {
    return <div>{props.title}</div>
}

const getToDoList = (props) => props.todoItems.map(itemTitle => <ToDoItem title={itemTitle}/>);

export default getToDoList;