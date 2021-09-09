import React from 'react';
import './withoutLogin.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal.slice';
import ModalsEnum from '../../../enums/modal.enums';

const WithoutLogin = () => {
    const dispatch = useDispatch();

    const closeLogin = () => {
        dispatch(openModal(ModalsEnum.CLOSE));
    }

    const toLogin = () => {
        dispatch(openModal(ModalsEnum.LOGIN));
    }

    return (
        <div id="withoutLoginId">
            <div>
                <div className="iconpart"><i class="fas fa-times" onClick={closeLogin}></i></div>
                <h2>Please first Log In to access services</h2>
                <button onClick={toLogin}>Log In</button>
            </div>
        </div>
    )
}

export default WithoutLogin
