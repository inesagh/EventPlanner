import React from 'react';
import '../../../header/header.css';
import './headerOfAccount.css';
import logo from '../../../../media/Rozvi Seri Logo.png';
import { Link as ScrollLink } from 'react-scroll';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal.slice';
import ModalsEnum from '../../../../enums/modal.enums';

const Header = (props) => {
    const dispatch = useDispatch();


    const funcSignOut = async () => {
        return await dispatch(openModal(ModalsEnum.CLOSE))
    }
    const funcForAbout = async () => {
        return await dispatch(openModal(ModalsEnum.ABOUTOFCUSTOMER));
    }

    return (
        <>
            <header id="homeOfMyAccount" className='headerDiv headerOfAccount'>
                <img src={logo} alt='Logo' ></img>
                <ul>
                    <li className="withAnimation">
                        <ScrollLink activeClass="active" to="homeOfMyAccount" spy={true} smooth={true}>Home</ScrollLink>
                    </li>
                    <li className="withAnimation">
                        <ScrollLink to="eventsId" spy={true} smooth={true}>My events</ScrollLink>
                    </li>
                    {
                        props.withServiceOrNot ?
                            <li className="withAnimation">
                                <ScrollLink to="servicesScroll" spy={true} smooth={true}>Services</ScrollLink>
                            </li>
                            : null
                    }
                    <li className="withAnimation">
                        <ScrollLink to="employees" spy={true} smooth={true}>Employees</ScrollLink>
                    </li>
                    <li className="account"><i class="fas fa-user"></i>
                        <ul>
                            <li onClick={funcForAbout} className="withAnimation"><Link to='/account' className="signOut">About</Link></li>
                            <li onClick={funcSignOut} className="withAnimation"><Link to='/' className="signOut">Sign out</Link></li>
                        </ul>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header
