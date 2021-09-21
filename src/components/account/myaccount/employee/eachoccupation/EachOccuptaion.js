import React, { useState } from 'react';
import EachEmployee from './eachemployee/EachEmployee';
import './eachOccupation.css';
import image from '../../../../../media/defaultemployeelogo.jpg';
import {Animated} from "react-animated-css";
import axios from 'axios';

const EachOccupation = (props) => {
    const array = [1, 2, 3];
    const [open, setOpen] = useState(false);
    const [employees, setEmployees] = useState();

    const funcForOpenEmployees = async () => {
        setOpen(!open);
        const url = `https://backend.eventplanner.inchvorban.space/account/employee/${props.occupation}`;
        const res = await axios.get(url);
        setEmployees(res.data);
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
                    employees.map(each => {
                        return <EachEmployee myId={each.id}  profileImage={each.logo} name={each.companyName} />
                    })
                }


                 {/* FAKE INFO */}
                {/* {
                    array.map(each => {
                        return <EachEmployee myId={each} profileImage={image} name="asd" />
                    })
                } */}
            </div>
            </Animated>
            : null
            }
        </div>
    )
}

export default EachOccupation
