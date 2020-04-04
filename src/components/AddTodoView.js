import React, { useState } from 'react';
import './Component.css';

function AddTodoView(props) {
    const [todoName,setTodoName] = useState("");
    const [todoDescription,setTodoDescription] = useState("");
    
    return (
        <div>
            <input placeholder="Enter Todo Name" onChange={(e)=>{setTodoName(e.target.value)}}/>
            <input placeholder="Enter Description" onChange={(e)=>{setTodoDescription(e.target.value)}}/>
            <button onClick={()=>{props.addNew(todoName,todoDescription)}}>Add Todo</button>
        </div>
    );
}

export default AddTodoView;
