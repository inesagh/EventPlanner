import React from 'react';
import './about.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../redux/modal.slice';
import ModalsEnum from '../../../../../enums/modal.enums';
import image from '../../../../../media/Add.png';

const About = (props) => {
    const dispatch = useDispatch();
    const customer = {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        gender: null,
        date: null,
        username: null,
        password: null,
        confirmPassword: null,
        role: null,
        occupation: null,
        companyName: null,
        image1: null,
        logo: null,
        price: null,
        description: null
    };

    const closeAbout = () => {
        dispatch(openModal(ModalsEnum.ClOSE))
    }
    return (
        <>
            <section id="aboutCustomer">
                <div className="aboutPart">
                    <div className="iconpart"><i class="fas fa-times" onClick={closeAbout}></i></div>
                    <h2>About</h2>
                    <div className="aboutDiv">

                        <div className="aboutPairs">
                            {/* {
                                 props.role === "EMPLOYEE" ? */}

                            <>
                                <p>Company Name <i class="far fa-edit"></i></p>
                                <p>{props.companyName}Company Name</p>

                                <p>Logo <i class="far fa-edit"></i></p>
                                {/* <img src={props.image1}/> */}
                                <img src={image} />

                                <p>Occupation <i class="far fa-edit"></i></p>
                                <p>{props.occupation}Occupation</p>

                                <p>Price /per work/ <i class="far fa-edit"></i></p>
                                <p>{props.price}Price ֏</p>

                                <p>Portfolio <i class="far fa-edit"></i></p>
                                <div className="protfolioOfAbout">
                                    {/* 
                                            <img src={props.image2}/>
                                            <img src={props.image3}/>
                                            <img src={props.image4}/> */}

                                    <img src={image} />
                                    <img src={image} />
                                    <img src={image} />
                                </div>

                                <p>Description <i class="far fa-edit"></i></p>
                                <p>{props.description}aaaaaaa</p>

                                <p className="personalInfo">Personal Info</p><br />

                            </>
                             {/* : null}  */}

                            <p>Full Name <i class="far fa-edit"></i></p>
                            <p>{props.firstName}{props.lastName}asd</p>


                            <p>Role <i class="far fa-edit"></i></p>
                            <p>{props.role}asd</p>


                            <p>Username <i class="far fa-edit"></i></p>
                            <p>{props.username}asd</p>

                            <p>Password <i class="far fa-edit"></i></p>
                            <p>{props.password}asd</p>

                            <p>Email <i class="far fa-edit"></i></p>
                            <p>{props.email}asd</p>

                            <p>Phone Number <i class="far fa-edit"></i></p>
                            <p>{props.phone}asd</p>

                            <p>Gender <i class="far fa-edit"></i></p>
                            <p>{props.gender}asd</p>

                        </div>

                        <div className="verticalLine"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
