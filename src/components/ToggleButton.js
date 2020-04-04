import React from 'react';

function ToggleButton(props) {
    return (
        <div>
            <button className={`${props.btnstatus}Btn`} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}


export default ToggleButton