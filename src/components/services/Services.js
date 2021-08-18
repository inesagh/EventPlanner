import React from 'react';
import './Services.css';
import EachEvent from './eachevent/EachEvent';
import wedding from '../../media/wedding1.jpg';
import birthday from '../../media/birthday.jpg';
import engagement from '../../media/engagement.jpg';
import baptism from '../../media/baptism.jpg';
import custom from '../../media/custom.jpg';

const Services = () => {
    const imageArray = [wedding, birthday, engagement, baptism, custom];
    const eventNameArray = ["Wedding", "Birthday", "Engagement", "Baptism", "Custom"];
    let i = -1;

    return (
        <main className='servicesAndAboutUs' id="servicesScroll">
            <h1>Services</h1>
            <div className='events' >
                {
                    imageArray.map(each => {
                        i++;
                        return <EachEvent image = {each} eventName = {eventNameArray[i]}/>
                    })
                }
            </div>
        </main>
    )
}

export default Services
