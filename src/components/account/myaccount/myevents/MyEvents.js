import React, { useState } from 'react';
import {Animated} from "react-animated-css";
import './myEvents.css';
import EachMyEvent from './eachmyevent/EachMyEvent';
import video12 from '../../../../media/video12.mp4';
import video11 from '../../../../media/video11.mp4';

import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal.slice';
import ModalsEnum from '../../../../enums/modal.enums';
import { changeTypes } from '../../../../redux/modal1.slice';
import AsideVideos from './asidevideos/AsideVideos';


const MyEvents = () => {
    const array = [1, 2, 3, 4];
    const dispatch = useDispatch();

    const funcForAddCustomEvent = () => {
        dispatch(changeTypes("Custom"));
        dispatch(openModal(ModalsEnum.SERVICEFROMACCOUNT));
    }

    const [openOrNot, setOpenOrNot] = useState(false);

    const openOrClose = () => {
        setOpenOrNot(!openOrNot);
    }


    return (
        <div id="eventsId">
            <div className="videosAndEvents">
                <AsideVideos asideVideo = {video12} />
                <div className="h1AndEvents">
                    <h1 onClick={openOrClose}>My Events</h1>
                    {/* {
                        openOrNot ?  */}
                        <Animated animationIn = 'slideInUp'>
                            <div className="allMyEvents">
                                {
                                    array.map(each => {
                                        return <EachMyEvent description="myevents" />;
                                    })
                                }
                                <EachMyEvent description="+" func = {funcForAddCustomEvent} className="addEvent"/>
                            </div>
                        </Animated>
                        {/* : null
                     } */}
                </div>
                <AsideVideos asideVideo = {video11} />
            </div>
        </div>
    )
}

export default MyEvents
