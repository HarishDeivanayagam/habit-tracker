import React from 'react';
import Card from './Card';
import './Component.css';

function HabitsView(props) {
    if (props.habits === undefined || props.habits === [] || props.habits === null || props.habits.length < 1) {
        return (
            <div>
                <div className="HabitsHeader">
                    <div><h3>Habits</h3></div>
                    <div><button onClick={props.add}>+</button></div>
                </div>
                <p>No habits found...</p>
            </div>
        );
    } else {
        return (
            <div>
                <div className="HabitsHeader">
                    <div><h3>Habits</h3></div>
                    <div><button onClick={props.add}>+</button></div>
                </div>
                <ul>
                    {props.habits.map((element, index) => {
                        return (<li key={index}>
                            <Card size="SmallCard">
                                <button id="RemoveBtn" onClick={() => { props.remove(index) }}>Remove</button>
                                <h4>{element.name}</h4>
                                <p>{element.description}</p>
                                <button onClick={()=>{props.showStats(element.name)}} id="statsbtn">View Stats</button>
                            </Card>
                        </li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default HabitsView;
