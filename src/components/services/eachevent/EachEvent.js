import React from 'react';
import './EachEvent.css';

const EachEvent = (props) => {
    return (
        <div className='eachEvent'>
            <img src={props.image} />
            <h3>{props.eventName}</h3>
        </div>
    )
}

export default EachEvent
