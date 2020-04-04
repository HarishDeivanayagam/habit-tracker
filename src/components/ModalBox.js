import React from 'react';
import './Component.css';

function ModalBox(props) {
    return (
        <div className={props.size}>
            <button id="CloseBtn" onClick={props.closeModal}>Close X</button>
            {props.children}        
        </div>
    );
}

export default ModalBox;
