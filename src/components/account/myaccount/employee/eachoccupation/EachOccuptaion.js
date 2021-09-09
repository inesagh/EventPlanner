import React, { useState } from 'react';
import EachEmployee from './eachemployee/EachEmployee';
import './eachOccupation.css';
import image from '../../../../../media/party.jpg';
import {Animated} from "react-animated-css";

const EachOccupation = (props) => {
    const array = [1, 2, 3];
    const [open, setOpen] = useState(false);

    const funcForOpenEmployees = () => {
        setOpen(!open);
    }

    const leftOrRight = props.rightOrNot ? 'right' : 'left';
    const animationForEmployees = props.rightOrNot ? 'bounceInRight' : 'bounceInLeft'; 
    const dir = props.rightOrNot ? 'rtl' : null;

    return (
        <div className="eachOccupation" style={{textAlign: leftOrRight}}>
            <h2 onClick={funcForOpenEmployees}>{props.occupation}</h2>
            {
                open ? 
                <Animated animationIn={animationForEmployees} animationOut="fadeOut" isVisible={true}>
                <div className="employeesDiv" style={{direction: dir}}>
                {
                    array.map(each => {
                        return <EachEmployee profileImage={image} name="" />
                    })
                }
            </div>
            </Animated>
            : null
            }
        </div>
    )
}

export default EachOccupation
