import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <footer className="footer" id="contactUsScroll">
            <div className="contactUs">
                <h3>Contact us</h3>
                <ul>
                    <li>
                        <i class="fas fa-phone-alt"></i>
                        <a href="tel:">+374 (44) 48 16 32</a>
                    </li>
                    <li>
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:">info@aca.am</a>
                    </li>
                    <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <a href="http://maps.google.com/?q=Hakob Hakobyan 3, Yerevan, Armenia" target="_blank">Hakob Hakobyan 3, Yerevan, Armenia</a>
                    </li>
                </ul>
            </div>
            <div className="designcoding">Design and coding <br></br> by Inglenook</div>
        </footer>
    )
}

export default Contact
