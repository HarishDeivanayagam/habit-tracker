import React, { useState } from 'react';
import './Component.css';

function AddHabitView(props) {
    const [habitName,setHabitName] = useState("");
    const [habitDescription,setHabitDescription] = useState("");
    
    return (
        <div>
            <input placeholder="Enter Habit Name" onChange={(e)=>{setHabitName(e.target.value)}}/>
            <input placeholder="Enter Description" onChange={(e)=>{setHabitDescription(e.target.value)}}/>
            <button onClick={()=>{props.addNew(habitName,habitDescription)}}>Add Habit</button>
        </div>
    );
}

export default AddHabitView;
