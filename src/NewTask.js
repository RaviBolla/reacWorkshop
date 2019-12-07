import React from "react";

const fun = (props) => {
    return (<div>
        <input id="todoNewItem" type="text" />
        <button onClick={(e)=> props.addToDoHandler(
            document.getElementById("todoNewItem").value)
        }>Add</button>
    </div>);
};

export default fun;
