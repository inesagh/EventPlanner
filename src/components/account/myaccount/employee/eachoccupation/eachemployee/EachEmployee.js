import React from 'react';
import './eachEmployee.css';

import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../../redux/modal.slice';
import ModalsEnum from '../../../../../../enums/modal.enums';

const EachEmployee = (props) => {
    const dispatch = useDispatch();

    const funcForEachEmployee = async () => {
        return await dispatch(openModal(ModalsEnum.EACHEMPLOYEEDETAIL));
    }
    return (
        <div className="eachEmployee" onClick={funcForEachEmployee}>
            <img src={props.profileImage} alt="logo" />
            <h3>Random Employee</h3>
        </div>
    )
}

export default EachEmployee
