import React from 'react';
import './eachEmployeeDetails.css';
import image from '../../../../../../../media/party.jpg';
import { useDispatch } from 'react-redux';
import ModalsEnum from '../../../../../../../enums/modal.enums';
import { openModal } from '../../../../../../../redux/modal.slice';


const EachEmployeeDetails = () => {
    const dispatch = useDispatch();
    const price = "asd";

    const closeLogin = () => {
        dispatch(openModal(ModalsEnum.CLOSE))
    }
    return (
        <section id="detailsId">
            <div className="employeeDetails">
                <div className="iconpart"><i class="fas fa-times" onClick={closeLogin}></i></div>

                {/* logo and info */}
                <div className="info">
                    <img src={image} />
                    <div>
                        <h2>Poghos Petros</h2>
                        <span>Florist</span><br/>
                        <a href="tel:">+37400000000</a><br/>
                        <span>2000  ֏ (per work)</span><br/>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient</p>
                    </div>
                </div>
                {/* portfolio */}
                <div className="works">
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                </div>
            </div>
        </section>
    )
}

export default EachEmployeeDetails
