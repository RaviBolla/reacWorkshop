import NewTask from "./NewTask";
import ToDoItems from "./ToDoItems";
import React from "react";

export default class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoItems:  ["Learn React", "Read Clean code", "Watch Movie"]};
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todoItem) {
        const todoItems = this.state.todoItems.concat(todoItem);
        this.setState({todoItems: todoItems});
    }
    render() {
        return <div>
            <NewTask addToDoHandler={this.addTodo}/>
            <ToDoItems todoItems={this.state.todoItems} />
        </div>;
    }
}
