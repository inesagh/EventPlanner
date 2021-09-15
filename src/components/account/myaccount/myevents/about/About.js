import React from 'react';
import './about.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../redux/modal.slice';
import ModalsEnum from '../../../../../enums/modal.enums';
import image from '../../../../../media/Add.png';
import axios from 'axios';

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

    const closeAbout = async () => {
        await dispatch(openModal(ModalsEnum.ClOSE))
    }

    const funcForData = async () => {
        const customerDetails = await axios.get("http://localhost:8080/account/about", {
            headers:{
                'Authorization': "Basic " + localStorage.getItem("token"),
                'Access-Control-Allow-Origin' : 'http://localhost:3000' 
        }
          });
        
        customer.firstName = customerDetails.data.firstName;
        customer.lastName = customerDetails.data.lastName;
        customer.username = customerDetails.data.username;
        customer.password = customerDetails.data.password;
        customer.role = customerDetails.data.role;
        customer.email = customerDetails.data.email;
        customer.gender = customerDetails.data.gender;
        customer.phone = customerDetails.data.phone;
        customer.date = customerDetails.data.date;
        customer.price = customerDetails.data.price;
        customer.occupation = customerDetails.data.occupation;
        customer.logo = customerDetails.data.logo;
        customer.image1 = customerDetails.data.image1;
        customer.description = customerDetails.data.description;
        customer.companyName = customerDetails.data.companyName;


    }

    return (
        <>
        {funcForData}
            <section id="aboutCustomer">
                <div className="aboutPart">
                    <div className="iconpart"><i class="fas fa-times" onClick={closeAbout}></i></div>
                    <h2>About</h2>
                    <div className="aboutDiv">

                        <div className="aboutPairs">
                            {/* {
                                 customer.role === "EMPLOYEE" ? */}

                            <>
                                <p>Company Name <i class="far fa-edit"></i></p>
                                <p>{customer.companyName}</p>

                                <p>Logo <i class="far fa-edit"></i></p>
                                {/* <img src={props.image1}/> */}
                                <img src={customer.logo} />

                                <p>Occupation <i class="far fa-edit"></i></p>
                                <p>{customer.occupation}</p>

                                <p>Price /per work/ <i class="far fa-edit"></i></p>
                                <p>{customer.price} ֏</p>

                                <p>Portfolio <i class="far fa-edit"></i></p>
                                <div className="protfolioOfAbout">
                                    <img src={customer.image1} />
                                </div>

                                <p>Description <i class="far fa-edit"></i></p>
                                <p>{customer.description}</p>

                                <p className="personalInfo">Personal Info</p><br />

                            </>
                             {/* : null}  */}

                            <p>Full Name <i class="far fa-edit"></i></p>
                            <p>{customer.firstName} {customer.lastName}</p>


                            <p>Role <i class="far fa-edit"></i></p>
                            <p>{customer.role}</p>


                            <p>Username <i class="far fa-edit"></i></p>
                            <p>{customer.username}</p>

                            <p>Password <i class="far fa-edit"></i></p>
                            <p>{customer.password}</p>

                            <p>Email <i class="far fa-edit"></i></p>
                            <p>{customer.email}</p>

                            <p>Phone Number <i class="far fa-edit"></i></p>
                            <p>{customer.phone}</p>

                            <p>Gender <i class="far fa-edit"></i></p>
                            <p>{customer.gender}</p>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
