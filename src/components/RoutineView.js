import React from 'react';
import './Component.css';
import Card from './Card';

function RoutinesView(props) {

    function markGreen(from, to) {
        let fromTimeArray = from.split(":");
        let toTimeArray = to.split(":");
        let currentHour = new Date().getHours();
        let currentMinutes = new Date().getMinutes();
        if (fromTimeArray[0] < currentHour && toTimeArray[0] > currentHour) {
            return 'current';
        } else if (fromTimeArray[0] > currentHour) {
            return 'upcoming';
        } else {
            return 'over';
        }
    }

    if (props.routines === undefined || props.routines === [] || props.routines === null || props.routines.length < 1) {
        return (
            <div>
                <p>No routines...</p>
                <button className="RoutineColumnBtn" onClick={props.change}>Change the Routine</button>
            </div>
        );
    } else {

        return (
            <div>
                <ul>
                    {props.routines.map((element, index) => {
                        if (markGreen(element.from, element.to) === 'current') {
                            return (<li key={index}>
                                <Card size="SmallCard">
                                    <p className="ongoingtext"><span className="dot"></span>OnGoing</p>
                                    <h4>{element.name}</h4>
                                    <p>{element.from} - {element.to}</p>
                                </Card>
                            </li>)
                        } else if (markGreen(element.from, element.to) === 'upcoming') {
                            return (<li key={index}>
                                <Card size="SmallCard">
                                    <p className="upcomingtext"><span className="dot"></span>UpComing</p>
                                    <h4>{element.name}</h4>
                                    <p>{element.from} - {element.to}</p>
                                </Card>
                            </li>)
                        } else {
                            return (<li key={index}>
                                <Card size="SmallCard">
                                    <p className="gotovertext"><span className="dot"></span>Got Over</p>
                                    <h4>{element.name}</h4>
                                    <p>{element.from} - {element.to}</p>
                                </Card>
                            </li>)
                        }
                    })}
                </ul>
                <button className="RoutineColumnBtn" onClick={props.change}>Change the Routine</button>
            </div>
        );
    }
}

export default RoutinesView;
