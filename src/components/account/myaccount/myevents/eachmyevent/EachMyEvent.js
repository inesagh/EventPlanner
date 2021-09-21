import React from 'react';
import './eachMyEvent.css';

import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../redux/modal.slice';
import ModalsEnum from '../../../../../enums/modal.enums';
import { eventFrom } from '../../../../../redux/modal2.slice';
import { useSelector } from 'react-redux';
import { changeTypes } from '../../../../../redux/modal1.slice';


const EachMyEvent = (props) => {
    const dispatch = useDispatch();


    const funcForMakingEvent = async () => {
        if (props.description === "+") {
            await dispatch(eventFrom(1));
            await dispatch(changeTypes("Custom"));
        } else {
            await dispatch(eventFrom(0));
            localStorage.setItem("clickedEventName", props.description);
        }
        await dispatch(openModal(ModalsEnum.SERVICEFROMACCOUNT))
    }
    return (
        <div className="eachmyevent" onClick={props.func} onClick={funcForMakingEvent}>
            <h3 className="myeventsdesc">{props.description}</h3>
        </div>
    )
}

export default EachMyEvent
