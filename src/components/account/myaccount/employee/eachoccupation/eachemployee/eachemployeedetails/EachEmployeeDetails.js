import React, { useState } from 'react';
import './eachEmployeeDetails.css';
import image from '../../../../../../../media/party.jpg';
import { useDispatch } from 'react-redux';
import ModalsEnum from '../../../../../../../enums/modal.enums';
import { openModal } from '../../../../../../../redux/modal.slice';
import axios from 'axios';


const EachEmployeeDetails = () => {
    const dispatch = useDispatch();
    const price = "asd";
    const [employeeInfo, setEmployeeInfo] = useState({
        firstName: null,
        lastName: null,
        occupation: null,
        phone: null,
        price: null,
        description: null,
        logo: null,
        image1: null
    });

    const closeLogin = async () => {
        await dispatch(openModal(ModalsEnum.CLOSE))
    }

    const funcForEmployeeInfo = async () => {
        const url = `https://backend.eventplanner.inchvorban.space/account/employee/${localStorage.getItem("id")}`;
        const res = await axios.get(url);
        setEmployeeInfo({ ...employeeInfo, ['firstName']: res.data.name });
        setEmployeeInfo({ ...employeeInfo, ['lastName']: res.data.surname });
        setEmployeeInfo({ ...employeeInfo, ['occupation']: res.data.specialist });
        setEmployeeInfo({ ...employeeInfo, ['phone']: res.data.phoneNumber });
        setEmployeeInfo({ ...employeeInfo, ['price']: res.data.price });
        setEmployeeInfo({ ...employeeInfo, ['description']: res.data.about });
        setEmployeeInfo({ ...employeeInfo, ['logo']: res.data.logo });
        setEmployeeInfo({ ...employeeInfo, ['image1']: res.data.image1 });

    }

    return (
        <section id="detailsId">
            {funcForEmployeeInfo()}

            <div className="employeeDetails">
                <div className="iconpart"><i class="fas fa-times" onClick={closeLogin}></i></div>
                <div className="info">
                    <img src={employeeInfo.logo} />
                    <div>
                        <h2>{employeeInfo.firstName} {employeeInfo.lastName}</h2>
                        <span>{employeeInfo.occupation}</span><br />
                        <a href="tel:">{employeeInfo.phone}</a><br />
                        <span>{employeeInfo.price}  ֏ (per work)</span><br />
                        <p>{employeeInfo.description}</p>
                    </div>


                    {/* FAKE INFO */}
                    {/* <img src={image} />
                    <div>
                        <h2>Poghos Petros</h2>
                        <span>Florist</span><br />
                        <a href="tel:">+37400000000</a><br />
                        <span>2000  ֏ (per work)</span><br />
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient</p>
                    </div> */}
                </div>

                <div className="works">
                    <img src={employeeInfo.logo} />
                    <img src={employeeInfo.image1} />
                </div>
            </div>
        </section>
    )
}

export default EachEmployeeDetails
