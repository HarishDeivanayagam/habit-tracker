import React from 'react';
import './Component.css';
import Card from './Card';

function TodoView(props) {
    if (props.todos === undefined || props.todos === [] || props.todos === null || props.todos.length < 1) {
        return (
            <div>
                <p>No Todos for today..</p>
                <button className="ColumnBtn" onClick={props.add}>Add Todo</button>
            </div>
        );
    } else {
        return (
            <div>
                <ul>
                    {props.todos.map((element, index) => {
                        if (element.done === "true") {
                            return (<li key={index}>
                                <Card size="SmallCard">
                                    <button id="UnDoBtn" onClick={() => { props.marknotdone(index) }}>Undo</button>
                                    <button id="RemoveBtn" onClick={() => { props.remove(index) }}>remove</button>
                                    <h4><strike>{element.name}</strike></h4>
                                    <p><strike>{element.description}</strike></p>
                                </Card>
                            </li>)
                        }
                        else {
                            return (<li key={index}>
                                <Card size="SmallCard">
                                    <button id="DoBtn" onClick={() => { props.markdone(index) }}>Done</button>
                                    <button id="RemoveBtn" onClick={() => { props.remove(index) }}>remove</button>
                                    <h4>{element.name}</h4>
                                    <p>{element.description}</p>
                                </Card>
                            </li>)
                        }
                    })}
                </ul>
                <button className="ColumnBtn" onClick={props.add}>Add Todo</button>
            </div>
        );
    }
}

export default TodoView;
