import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function HabitStats(props) {

    const [chartData, setChartData] = useState({});

    function renderDates() {
        if (props.habitName === undefined || props.habitStats[props.habitName] === undefined) {
            return [];
        } else {
            return Object.keys(props.habitStats[props.habitName]);
        }
    }

    function renderXp() {
        if (props.habitName === undefined || props.habitStats[props.habitName] === undefined) {
            return [];
        } else {
            let array = [];
            let temp = Object.entries(props.habitStats[props.habitName]);
            for (let i = 0; i < temp.length; i++) {
                array.push(temp[i][1]['xp']);
            }
            return array;
        }
    }


    function chart(dates,xp) {
        setChartData({
            labels: dates,
            datasets: [{
                label: 'Happnies of habit',
                data: xp,
                backgroundColor: ['rgb(161, 55, 214)']
            }],
            borderWidth: 4
        })
    }

    useEffect(() => {
        chart(renderDates(),renderXp())
    },[props.habitName])

    return (
        <div>
            <h1>{props.habitName}</h1>
            <Line data={chartData} />
        </div>
    )
}


export default HabitStats