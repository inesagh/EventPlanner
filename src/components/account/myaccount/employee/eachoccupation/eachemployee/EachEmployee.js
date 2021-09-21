import React from 'react';
import './eachEmployee.css';

import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../../redux/modal.slice';
import ModalsEnum from '../../../../../../enums/modal.enums';

const EachEmployee = (props) => {
    const dispatch = useDispatch();

    const funcForEachEmployee = async () => {
        await dispatch(openModal(ModalsEnum.EACHEMPLOYEEDETAIL));
        localStorage.setItem("id", props.myId);
    }

    return (
        <div className="eachEmployee" onClick={funcForEachEmployee}>
            <img src={props.profileImage} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default EachEmployee
