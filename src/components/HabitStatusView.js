import React, { useState } from 'react';

function HabitStatusView(props){
    const [option,setOption] = useState(returnDefaultOption());
    const [isChecked,setChecked] = useState(returnChecked());

    function returnChecked(){
        if(props.data===null){
            return false;
        } else {
            if(props.data['done']==='true'){
                return true;
            } else {
                return false;
            }
        }
    }

    function returnDefaultOption() {
        if(props.data===null){
            return "0";
        } else {
            return props.data['xp'];
        }        
    }



    return(
        <div>
            <input type="checkbox" defaultChecked={isChecked} onChange={()=>{setChecked(!isChecked)}} onClick={()=>{props.onClick(props.habit,props.date,option,!isChecked)}}/><br/>

            <select defaultValue={option} onChange={e=>{setOption(e.target.value)}}>
                <option value="0">Select..</option>
                <option value="5">Extremely Satisfied</option>
                <option value="4">Somewhat Satisfied</option>
                <option value="3">I tried my level best</option>
                <option value="2">Need improvement</option>
                <option value="1">I did really bad</option>
            </select>
        </div>
    );
}

export default HabitStatusView