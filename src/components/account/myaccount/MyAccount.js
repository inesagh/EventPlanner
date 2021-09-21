import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Employee from './employee/Employee';
import Contact from '../../contact/Contact';
import MyEvents from './myevents/MyEvents';
import Service from '../../services/Services';
import axios from 'axios';

const MyAccount = () => {
    const arrayForEvents = [];
    let username;
    let serviceee;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const getUsername = () => {
        const res = ["asd", "ocupation", ["event", "event1", "event2"]];
        // const res = await axios.post("https://backend.eventplanner.inchvorban.space/login/events", {}, {
        //         headers:{'Authorization': "Basic " + localStorage.getItem("token")}
        //       }); 
        // await username = res.data[0];
        username = res[0];
        if (res[1]) {
            serviceee = true;
        } else {
            serviceee = false;
        }
        res[2].map((event) => {
            arrayForEvents.push(event);
        });
    }

    return (
        <div>
            {getUsername()}
            <Header withServiceOrNot={serviceee} userName={username} />
            <MyEvents yourEvents={arrayForEvents}  />
            {
                serviceee ?
                    <Service fromAccountOrNot={true} />
                    : null
            }
            <Employee />
            <Contact />
        </div>
    );
}

export default MyAccount
