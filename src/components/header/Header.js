import React, { useState } from 'react';
import './header.css';
import logo from '../../media/Rozvi Seri Logo.png';
import { Link } from 'react-scroll';
import { useDispatch } from 'react-redux';
import ModalsEnum from '../../enums/modal.enums';
import { openModal } from '../../redux/modal.slice';
import { Link as ScrollLink } from 'react-scroll';


const Header = () => {
    const dispatch = useDispatch();
    const [responsiveForUl, setResponsiveForUl] = useState(false);
    const [xOrMenu, setXOrMenu] = useState("m");
    const [responsiveOrNot, setResponsiveOrNot] = useState("-");

    const funcForPopup = async () => {
        await dispatch(openModal(ModalsEnum.LOGIN));
    }

    const funcForUl = () => {
        setResponsiveForUl(true);
        setXOrMenu("x");
    }

    const funcForX = () => {
        setResponsiveForUl(false);
        setXOrMenu("m");
    }

    return (
        <>
            <header className='headerDiv'>
                <img src={logo} alt='Logo' ></img>
                {
                    xOrMenu == "m" ?
                        <span className="menuIcon" onClick={funcForUl}><i class="fas fa-list-ul"></i></span>
                        : <span className="menuIcon" ><i class="fas fa-times" onClick={funcForX}></i></span>
                }
                {
                    responsiveForUl ?
                        <ul className={responsiveForUl ? "responsiveMenu" : null}>
                            <li className="withAnimation">
                                <Link activeClass="active" to="homeScroll" spy={true} smooth={true}>Home</Link>
                            </li>
                            <li className="withAnimation">
                                <Link to="aboutUsScroll" spy={true} smooth={true}>About us</Link>
                            </li>
                            <li className="withAnimation">
                                <Link to="servicesScroll" spy={true} smooth={true}>Service</Link>
                            </li>
                            <li className="withAnimation">
                                <Link to="contactUsScroll" spy={true} smooth={true}>Contact us</Link>
                            </li>
                            <li onClick={funcForPopup} className="accountIcon"><i class="fas fa-user"></i></li>
                        </ul>
                        : null}

                <ul className="asd">
                    <li className="withAnimation">
                        <Link activeClass="active" to="homeScroll" spy={true} smooth={true}>Home</Link>
                    </li>
                    <li className="withAnimation">
                        <Link to="aboutUsScroll" spy={true} smooth={true}>About us</Link>
                    </li>
                    <li className="withAnimation">
                        <Link to="servicesScroll" spy={true} smooth={true}>Service</Link>
                    </li>
                    <li className="withAnimation">
                        <Link to="contactUsScroll" spy={true} smooth={true}>Contact us</Link>
                    </li>
                    <li onClick={funcForPopup} className="accountIcon"><i class="fas fa-user"></i></li>
                </ul>
            </header>
        </>
    )
}

export default Header
