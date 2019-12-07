import NewTask from "./NewTask";
import ToDoItems from "./ToDoItems";
import React from "react";

export default class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoItems:  ["Learn React", "Read Clean code", "Watch Movie"]}
    }
    render() {
        return <div>
            <NewTask />
            <ToDoItems todoItems={this.state.todoItems} />
        </div>;
    }
}
