import React, { useEffect, useState } from 'react';
import HabitStatusView from './HabitStatusView';

function CalendarView(props) {

    const [dates, setDates] = useState([]);
    const [isLoading, setLoading] = useState(true);

    function renderDates(currDate) {
        let datesRendered = [];
        datesRendered.push(currDate);
        for (let index = 1; index <= 3; index++) {
            let temp = new Date();
            temp.setDate(currDate + index);
            datesRendered.push(temp.getDate());
        }
        return datesRendered;
    }

    function renderHabits(habit, index) {
        if (props.habitStats === null) {
            return <tr key={index}>
                {dates.map((date, index) => {
                    return <td key={index}><HabitStatusView data={null} date={date} habit={habit} onClick={props.updateHabitStat} /></td>
                })}
            </tr>
        }
        else if (props.habitStats[habit] === undefined) {
            return <tr key={index}>
                {dates.map((date, index) => {
                    return <td key={index}><HabitStatusView data={null} date={date} habit={habit} onClick={props.updateHabitStat} /></td>
                })}
            </tr>
        }
        else {
            return <tr key={index}>
                {dates.map((date, index) => {
                    let temp = props.habitStats[habit][date + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())]
                    if (temp === undefined) {
                        return <td key={index}><HabitStatusView data={null} date={date} habit={habit} onClick={props.updateHabitStat} /></td>
                    } else {
                        return <td key={index}><HabitStatusView data={temp} date={date} habit={habit} onClick={props.updateHabitStat} /></td>
                    }
                })}
            </tr>
        }
    }


    useEffect(() => {
        setDates(renderDates(props.currDate));
        setLoading(false);
    }, [])


    if (isLoading === true) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    } else if(props.habits === null || props.habits === undefined || props.habits.length < 1) {
        return (
            <div>
                <button onClick={()=>{setDates(renderDates(props.currDate-3))}} id="calenderchangebtn">{"<"}</button><button onClick={()=>{setDates(renderDates(props.currDate+3))}} id="calenderchangebtn">{">"}</button>
                <table className="CalendarTable">
                    <tbody>
                        <tr>
                            {
                                dates.map((date, index) => {
                                    if (date === props.currDate) {
                                        return <th onClick={() => { props.selectedDate(date) }} key={index}><p id="selectedDate">{date}</p></th>
                                    } else {
                                        return <th onClick={() => { props.selectedDate(date) }} key={index}><p>{date}</p></th>
                                    }
                                })
                            }
                        </tr>
                        <tr><td>No Habits...</td><td>No Habits...</td><td>No Habits...</td><td>No Habits...</td></tr>
                    </tbody>
                </table>
            </div>
        );        
    }
    else {
        return (
            <div>
                <button onClick={()=>{setDates(renderDates(props.currDate-3))}} id="calenderchangebtn">{"<"}</button><button onClick={()=>{setDates(renderDates(props.currDate+3))}} id="calenderchangebtn">{">"}</button>
                <table className="CalendarTable">
                    <tbody>
                        <tr>
                            {
                                dates.map((date, index) => {
                                    if (date === props.currDate) {
                                        return <th onClick={() => { props.selectedDate(date) }} key={index}><p id="selectedDate">{date}</p></th>
                                    } else {
                                        return <th onClick={() => { props.selectedDate(date)  }} key={index}><p>{date}</p></th>
                                    }
                                })
                            }
                        </tr>
                        {
                            props.habits.map((habit, index) => {
                                return renderHabits(habit['name'], index)
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }


}

export default CalendarView