import React from 'react';
import './eachMyEvent.css';

import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../redux/modal.slice';
import ModalsEnum from '../../../../../enums/modal.enums';
import { eventFrom } from '../../../../../redux/modal2.slice';
import { useSelector } from 'react-redux';


const EachMyEvent = (props) => {
    const dispatch = useDispatch();
    const makeEvent = useSelector((state) => state.makeEventFromService.makeEvent);

    const funcForMakingEvent = () => {
        if (props.description === "+") {
            dispatch(eventFrom(1));
        } else {
            dispatch(eventFrom(0));
        }
        dispatch(openModal(ModalsEnum.SERVICEFROMACCOUNT))
    }
    return (
        <div className="eachmyevent" onClick={props.func} onClick={funcForMakingEvent}>
            <h3 className="myeventsdesc">{props.description}</h3>
        </div>
    )
}

export default EachMyEvent
