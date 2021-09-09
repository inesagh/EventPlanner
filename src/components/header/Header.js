import React from 'react';
import 'header.css';
import logo from '../../media/Rozvi Seri Logo.png';
import { Link } from 'react-scroll';
import { useDispatch } from 'react-redux';
import ModalsEnum from '../../enums/modal.enums';
import { openModal } from '../../redux/modal.slice';

const Header = () => {
    const dispatch = useDispatch();

    const funcForPopup = async () => {
        await dispatch(openModal(ModalsEnum.LOGIN));
    }

    return (
        <>
            <header className='headerDiv'>
                <img src={logo} alt='Logo' ></img>
                <ul>
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
                    <li onClick={funcForPopup}><i class="fas fa-user"></i></li>
                </ul>
            </header>
        </>
    )
}

export default Header
