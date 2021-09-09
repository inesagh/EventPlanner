import React, { useEffect } from 'react';
import Header from './header/Header';
import Employee from './employee/Employee';
import Contact from '../../contact/Contact';
import MyEvents from './myevents/MyEvents';
import Service from '../../services/Services';

const MyAccount = () => {
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
    return(
        <div>
            <Header withServiceOrNot = {true} />
            <MyEvents />
            <Service fromAccountOrNot = {true} />
            <Employee />
            <Contact />
        </div>
    );
}

export default MyAccount
