import React from 'react';
import './eachEvent.css';

const EachEvent = (props) => {
    return (
        <div className='eachEvent' onClick={props.funcForCLicking}>
            <img src={props.image} />
            <h3>{props.eventName}</h3>
        </div>
    )
}

export default EachEvent
