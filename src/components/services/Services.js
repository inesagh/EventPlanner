import React from 'react';
import './Services.css';
import EachEvent from './eachevent/EachEvent';
import wedding from '../../media/wedding1.jpg';
import birthday from '../../media/birthday.jpg';
import engagement from '../../media/engagement.jpg';
import baptism from '../../media/baptism.jpg';
import custom from '../../media/custom.jpg';
import MakeEvent from './eachevent/makeevent/MakeEvent';


import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal.slice';
import ModalsEnum from '../../enums/modal.enums';
import { changeTypes } from '../../redux/modal1.slice';
import { eventFrom } from '../../redux/modal2.slice';

const Services = (props) => {
    const imageArray = [wedding, birthday, engagement, baptism, custom];
    const eventNameArray = ["Wedding", "Birthday", "Engagement", "Baptism", "Custom"];
    let i = -1;

    const dispatch = useDispatch();

    const clickWithoutLogin = () => {
        dispatch(openModal(ModalsEnum.WITHOUTLOGIN))
    }

    const clickWithLogin = (type) => {
        dispatch(changeTypes(type));
        dispatch(openModal(ModalsEnum.SERVICEFROMACCOUNT))
    }

    const checkFunction = (type) => {
        if(props.fromAccountOrNot){
            dispatch(eventFrom(true));
            return clickWithLogin(type);
        }else{
            return clickWithoutLogin();
        }
    }

    return (
        <main className='servicesAndAboutUs' id="servicesScroll">
            <h1>Services</h1>
            <div className='events' >
                {
                    imageArray.map(each => {
                        i++;
                        const b = i;
                        return <EachEvent funcForCLicking = {() => checkFunction(eventNameArray[b])} image = {each} eventName = {eventNameArray[i]}/>
                    })
                }
            </div>
        </main>
    )
}

export default Services
