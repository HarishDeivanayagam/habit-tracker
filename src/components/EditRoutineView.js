import React, { useState } from 'react';

function EditRoutineView(props) {
    const [routines, setRoutines] = useState(props.routines);

    const [newRoutineName, setNewRoutineName] = useState("Enter Name");
    const [newRoutineFrom, setNewRoutineFrom] = useState("Enter From");
    const [newRoutineTo, setNewRoutineTo] = useState("Enter To");

    function remove(index) {
        let temp = [...routines];
        temp.splice(index, 1);
        setRoutines(temp);
    }

    function add() {
        let newRoutine = {
            "name": newRoutineName,
            "from": newRoutineFrom,
            "to": newRoutineTo
        }
        if (routines === null) {
            let temp = [];
            temp.push(newRoutine);
            setRoutines(temp);
            setNewRoutineName("Enter Name");
            setNewRoutineTo("Enter From");
            setNewRoutineFrom("Enter To");
        }
        else {
            let temp = [...routines];
            temp.push(newRoutine);
            setRoutines(temp);
            setNewRoutineName("Enter Name");
            setNewRoutineTo("Enter From");
            setNewRoutineFrom("Enter To");
        }
    }

    function changeRoutineState(type, index, value) {
        let temp = [...routines];
        temp[index][type] = value;
        setRoutines(temp);
    }

    if (props.routines === null || props.routines.length < 1) {
        return (
            <div>
                <p>No Routines..</p>
                <ul>
                    <li>
                        <h4><input placeholder={newRoutineName} onChange={(e) => setNewRoutineName(e.target.value)} /></h4>
                        <p><input type="time" placeholder={newRoutineFrom} onChange={(e) => setNewRoutineFrom(e.target.value)} /><input type="time" placeholder={newRoutineTo} onChange={(e) => setNewRoutineTo(e.target.value)} /></p>
                        <button onClick={add}>Add</button>
                    </li>
                </ul>
                <button onClick={() => { props.change(routines) }}>Update</button>
            </div>
        );
    }
    else {

        return (
            <div>
                <ul>
                    {routines.map((element, index) => {
                        return (<li key={index}>
                            <h4><input value={element.name} onChange={(e) => changeRoutineState("name", index, e.target.value)} /></h4>
                            <p><input id="timeinput" type="time" value={element.from} onChange={(e) => changeRoutineState("from", index, e.target.value)} /><input id="timeinput" type="time" value={element.to} onChange={(e) => changeRoutineState("to", index, e.target.value)} /></p>
                            <button onClick={() => { remove(index) }}>Remove</button>
                        </li>)
                    })}
                    <li>
                        <h4><input placeholder={newRoutineName} onChange={(e) => setNewRoutineName(e.target.value)} /></h4>
                        <p><input id="timeinput" type="time" placeholder={newRoutineFrom} onChange={(e) => setNewRoutineFrom(e.target.value)} /><input id="timeinput" type="time" placeholder={newRoutineTo} onChange={(e) => setNewRoutineTo(e.target.value)} /></p>
                        <button onClick={add}>Add</button>
                    </li>
                </ul>
                <button onClick={() => { props.change(routines) }}>Update</button>
            </div>
        );
    }
}

export default EditRoutineView