import React from 'react';

function Card(props) {
   return(
       <div className={props.size}>
           {props.children}
       </div>
   ) 
}


export default Card