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


const MyEvents = (props) => {
    const dispatch = useDispatch();

    const funcForAddCustomEvent = async () => {
        await dispatch(changeTypes("Custom"));
        await dispatch(openModal(ModalsEnum.SERVICEFROMACCOUNT));
    }

    return (
        <div id="eventsId">
            <div className="videosAndEvents">
                <AsideVideos asideVideo = {video12} />
                <div className="h1AndEvents">
                    <h1>My Events</h1>
                        <Animated animationIn = 'slideInUp'>
                            <div className="allMyEvents">
                                {
                                    props.yourEvents.map(each => {
                                        return <EachMyEvent description={each} />;
                                    })
                                }
                                <EachMyEvent description="+" func = {funcForAddCustomEvent} className="addEvent"/>
                            </div>
                        </Animated>
                </div>
                <AsideVideos asideVideo = {video11} />
            </div>
        </div>
    )
}

export default MyEvents
