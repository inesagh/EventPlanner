import React from 'react';
import './makeEvent.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal.slice';
import ModalsEnum from '../../../../enums/modal.enums';
import { useSelector } from 'react-redux';


const MakeEvent = (props) => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.typesOfEvents.types);
    const makeEvent = useSelector((state) => state.makeEventFromService.makeEvent);

    const closeLogin = () => {
        dispatch(openModal(ModalsEnum.CLOSE));
    }

    let totalPrice = 0;
    const funcForMakingEvent = () => {
        dispatch(openModal(ModalsEnum.READYEVENT));
    }

    return (
        <div id="makeEventId">
            <div>
                <div className="iconpart"><i class="fas fa-times" onClick={closeLogin}></i></div>
                {
                    makeEvent ?
                        <>
                            <h2>Make your event</h2>
                            <div className="pairsForMakingEvent">
                                <p>Type</p>
                                {
                                    types === 'Custom' ?
                                        <select>
                                            <option>Custom</option>
                                            <option>Wedding</option>
                                            <option>Birthday</option>
                                            <option>Engagement</option>
                                            <option>Baptism</option>
                                        </select>
                                        :
                                        <select disabled="true" className="disabledSelect">
                                            <option>{types}</option>
                                        </select>
                                }
                                <p>Florist</p>
                                <select onChange={() => totalPrice}>
                                    <option>Option1/price/</option>
                                    <option>Option2</option>
                                    <option>Option3</option>
                                </select>

                                <p>Photographer and/or <br /> videographer</p>
                                <select>
                                    <option>Option1/price/</option>
                                    <option>Option2</option>
                                    <option>Option3</option>
                                </select>

                                <p>DJ</p>
                                <select>
                                    <option>Option1/price/</option>
                                    <option>Option2</option>
                                    <option>Option3</option>
                                </select>

                                <p>Hairstylist</p>
                                <select>
                                    <option>Option1/price/</option>
                                    <option>Option2</option>
                                    <option>Option3</option>
                                </select>

                                <p>Makeup artist</p>
                                <select>
                                    <option>Option1/price/</option>
                                    <option>Option2</option>
                                    <option>Option3</option>
                                </select>

                                <p>Cake baker</p>
                                <select>
                                    <option>Option1/price/</option>
                                    <option>Option2</option>
                                    <option>Option3</option>
                                </select>

                                <p>Buffet</p>
                                <select>
                                    <option>Option1/price/</option>
                                    <option>Option2</option>
                                    <option>Option3</option>
                                </select>

                                <p>Decorator</p>
                                <select>
                                    <option>Option1/price/</option>
                                    <option>Option2</option>
                                    <option>Option3</option>
                                </select>
                            </div>
                            <br />
                            <div className="line"></div>
                            <div className="pairsForMakingEvent">
                                <p className="totalPrice">Total Price</p>
                                <p>{totalPrice}֏</p>
                            </div>
                            <button onClick={funcForMakingEvent}>Make Event</button>
                        </>
                        :
                        <>
                            <h2>Type</h2>
                            <div className="pairsForMakingEvent">

                                <p>Florist</p>
                                <p>asd</p>
                                
                                <p>Photographer and/or <br /> videographer</p>
                                <p>asd</p>
                                
                                <p>DJ</p>
                                <p>asd</p>
                                
                                <p>Hairstylist</p>
                                <p>asd</p>
                                
                                <p>Makeup artist</p>
                                <p>asd</p>
                                
                                <p>Cake baker</p>
                                <p>asd</p>
                                
                                <p>Buffet</p>
                                <p>asd</p>
                                
                                <p>Decorator</p>
                                <p>asd</p>
                            </div>
                            <br />
                            <div className="line"></div>
                            <div className="pairsForMakingEvent">
                                <p className="totalPrice">Total Price</p>
                                <p>{totalPrice}֏</p>
                            </div>
                        </>
                }
            </div>

        </div >
    )
}

export default MakeEvent
