import React from 'react';
import './Header.css';
import logo from '../../media/Rozvi Seri Logo.png';
import Login from '../account/Login';
import { Link } from 'react-scroll';

const Header = () => {
    let b = false;
    localStorage.setItem('popup', b);
    localStorage.setItem("loginOrRegistration", "");
    let login;
    
    const funcForPopup = () => {
        b = !(JSON.parse(localStorage.getItem("popup")) ? true : false);
        console.log(b);
        localStorage.setItem("popup", b);
        console.log(localStorage.getItem("popup"));
        login = (b === true ? <Login forId={true} forClass={false} /> : <Login forId={false} forClass={true} />);
    }


    return (
        <>
            <header className='headerDiv'>
                <img src={logo} alt='Logo' ></img>
                <ul>
                    <li>
                        <Link activeClass="active" to="homeScroll" spy={true} smooth={true}>Home</Link>
                    </li>
                    <li>
                        <Link to="aboutUsScroll" spy={true} smooth={true}>About us</Link>
                    </li>
                    <li>
                        <Link to="servicesScroll" spy={true} smooth={true}>Service</Link>
                    </li>
                    <li>
                        <Link to="contactUsScroll" spy={true} smooth={true}>Contact us</Link>
                    </li>
                    <li onClick={funcForPopup}>My account</li>
                </ul>
            </header>
            {/* {login} */}
        </>
    )
}

export default Header
