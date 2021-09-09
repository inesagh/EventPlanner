import React from 'react';

import { useSelector } from 'react-redux';
import Login from './account/login/Login';
import Registration from './account/registration/Registration';
import MyAccount from './account/myaccount/MyAccount';
import EachEmployeeDetails from './account/myaccount/employee/eachoccupation/eachemployee/eachemployeedetails/EachEmployeeDetails';
import WithoutLogin from './services/withoutlogin/WithoutLogin';

import ModalsEnum from '../enums/modal.enums';
import About from './account/myaccount/myevents/about/About';
import MakeEvent from './services/eachevent/makeevent/MakeEvent';
import ReadyEvent from './services/eachevent/makeevent/ReadyEvent';



export default function ComponentsWrapper() {
    const modalId = useSelector((state) => state.modal.modalId);

    switch (modalId) {
        case ModalsEnum.LOGIN:
            return <Login />;
        case ModalsEnum.REGISTRATION:
            return <Registration />;
        case ModalsEnum.MYACCOUNT:
            return <MyAccount />;
        case ModalsEnum.EACHEMPLOYEEDETAIL:
            return <EachEmployeeDetails />
        case ModalsEnum.ABOUTOFCUSTOMER:
            return <About />;
        case ModalsEnum.WITHOUTLOGIN:
            return <WithoutLogin />;
        case ModalsEnum.SERVICEFROMACCOUNT:
            return <MakeEvent />;
        case ModalsEnum.READYEVENT:
            return <ReadyEvent />;
        default:
            return <></>;
    }
}