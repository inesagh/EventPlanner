import React, { useState } from 'react';
import './registration.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal.slice';
import ModalsEnum from '../../../enums/modal.enums';
import axios from 'axios';
import validator from 'validator'

const Registration = (props) => {
    const [customer, setCustomer] = useState({
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        gender: null,
        date: null,
        username: null,
        password: null,
        confirmPassword: null,
        role: 'CUSTOMER',
        occupation: 'Florist',
        companyName: null,
        image1: null,
        logo: null,
        price: null,
        description: null
    });

    var bodyForRegistration = new FormData();


    const dispatch = useDispatch();

    const [registration, setRegistration] = useState(false);
    const funcForLogin = () => {
        dispatch(openModal(ModalsEnum.LOGIN))
    }

    // 
    const closeLogin = () => {
        dispatch(openModal(ModalsEnum.CLOSE))
    }


    const [selectedRole, setSelectedRole] = useState("CUSTOMER");
    const [employeeOrNot, setEmployeeOrNot] = useState(false);

    const afterRole = (e) => {

        setCustomer({ ...customer, ['role']: e.target.value });
        // console.log("role", e.target.value);
        // console.log("customerrole->", customer.role);
        if (customer.role === "CUSTOMER") {
            setEmployeeOrNot(true);
        } else {
            setEmployeeOrNot(false);
        }
        // console.log(role);
    }


    const [mismatchedOrNot, setMismatchedOrNot] = useState(false);
    const mismatchedPassword = <p className="mismatch">Password mismatch!</p>;

    const funcConfirmPassword = (e) => {
        // if (customer.password !== null && customer.confirmPassword !== null) {
        if (customer.password === e.target.value) {
            setMismatchedOrNot(true);
            setCustomer({ ...customer, ['confirmPassword']: e.target.value })
        } else {
            setMismatchedOrNot(false);
        }
        // }else{
        //     setMismatchedOrNot(true);
        // } 
    }

    const [notValidEmail, setNotValidEmail] = useState(false);
    const notValidEmailAddress = <p className="mismatch">Invalid Email. Please provide valid one.</p>;

    const mailValidation = (e) => {
        if (validator.isEmail(e.target.value)) {
            setNotValidEmail(false);
            setCustomer({ ...customer, ['email']: e.target.value });

        } else {
            setNotValidEmail(true);
        }
    };


    const registrationObject = async () => {
        await dispatch(openModal(ModalsEnum.LOGIN));
        let res , res1;

        if(customer.firstName || customer.lastName ||
        customer.username ||
        customer.password || customer.confirmPassword ||
        customer.date || customer.email ||
        customer.phone || customer.gender || 
        customer.price || customer.description ||
        customer.image1 || customer.logo){

            if(customer.role == 'EMPLOYEE'){

                bodyForRegistration.append('logo', customer.logo);
                bodyForRegistration.append('image1', customer.image1);

                // console.log(bodyForRegistration);            
                // console.log(customer);

                customer.logo = customer.logo.name;
                customer.image1 = customer.image1.name;
                bodyForRegistration.append('body', JSON.stringify(customer));


                // res = await axios.all([
                //     axios.post("http://localhost:8080/registration", customer),
                //     axios.post("http://localhost:8080/register", bodyForRegistration,
                //     {headers: { "Content-Type": "multipart/form-data" }})
                // ]);
                // console.log(res[0], res[1]);


                res = await axios({
                    url: "http://192.168.88.192:8080/register",
                    method: "post",
                    data: bodyForRegistration,
                    headers: { "Content-Type": "multipart/form-data" }});

                console.log(res);
                console.log("response");


                // await dispatch(openModal(ModalsEnum.LOGIN));

                }else{
                    console.log(customer);
                    res = await axios.post("http://192.168.88.192:8080/registration", customer);
                }

                if(res.data){
                    console.log("aaaaaa");
                    await dispatch(openModal(ModalsEnum.LOGIN));
                } else {
                    console.log("bbbbbb");
                    await dispatch(openModal(ModalsEnum.REGISTRATION));
                    alert("This username has been taken. Please try another one.");
                }

        } else{
            await dispatch(openModal(ModalsEnum.REGISTRATION));
            alert("Please fill in all required fields for registration.");
        }
    }


    return (
        <>
            <section id="registrationId">
                <div className="registrationpart">
                    <div className="iconpart"><i class="fas fa-times" onClick={closeLogin}></i></div>

                    <h2>Sign Up</h2>
                    <form>
                        <label htmlFor="name">First Name*</label>
                        <input type="text" id="name" name="name" required onChange={(e) => {
                            setCustomer({ ...customer, ['firstName']: e.target.value })
                        }
                        } /><br />
                        <label htmlFor="lastName">Last Name*</label>
                        <input type="text" id="lastName" name="lastName" required onChange={(e) => {
                            setCustomer({ ...customer, ['lastName']: e.target.value })
                        }
                        } /><br />

                        <label htmlFor="email">E-mail*</label>
                        <input type="email" id="email" name="email" required onChange={mailValidation} />
                        {
                            notValidEmail ? notValidEmailAddress : null
                        }
                        <br />
                        <label htmlFor="phone">Phone*</label>
                        <input type="tel" id="phone" name="phone" required onChange={(e) => {
                            setCustomer({ ...customer, ['phone']: e.target.value })
                        }
                        } /><br />

                        <label>Gender*</label>
                        <div className="genderLabel">
                            <label htmlFor="male"><input type="radio" id="male" className="genderClassname" name="gender" value="MALE" required onChange={(e) => {
                                setCustomer({ ...customer, ['gender']: e.target.value })
                            }} />
                                Male    </label>
                            <label htmlFor="female"><input type="radio" id="female" className="genderClassname" name="gender" value="FEMALE" required onChange={(e) => {
                                setCustomer({ ...customer, ['gender']: e.target.value })
                            }} />
                                Female</label>
                        </div><br />

                        <label htmlFor="birthday">Date of Birthday*</label>
                        <input type="date" id="birthday" name="birthday" onChange={(e) => {
                            setCustomer({ ...customer, ['date']: e.target.value })
                        }
                        }></input><br />

                        <label htmlFor="username">Username*</label>
                        <input type="text" id="username" name="username" required onChange={(e) => {
                            setCustomer({ ...customer, ['username']: e.target.value })
                        }
                        }/><br />

                        <label htmlFor="password">Password*</label>
                        <input type="password" id="password" name="password" required onChange={(e) => {
                            setCustomer({ ...customer, ['password']: e.target.value })
                        }
                        } /><br />
                        <label htmlFor="confirmPassword">Confirm Password*</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required onChange={funcConfirmPassword} />
                        {
                            !mismatchedOrNot ? mismatchedPassword : null
                        }
                        <br />


                        <label htmlFor="role">Role*</label>
                        <select onChange={afterRole} value={customer.role} className="roles">
                            <option value="CUSTOMER">Customer</option>
                            <option value="EMPLOYEE">Employee</option>
                        </select><br />
                        {
                            employeeOrNot ? <>

                                <label htmlFor="occupation" >Occupation*</label>
                                <select value={customer.occupation} className="roles" name="occupation" onChange={(e) => {
                                    setCustomer({ ...customer, ['occupation']: e.target.value });
                                }}>
                                    <option value="Florist">Florist</option>
                                    <option value="Photographer/Videographer">Photographer and/or videographer</option>
                                    <option value="DJ">DJ</option>
                                    <option value="Hairstylist">Hairstylist</option>
                                    <option value="Makeup">Makeup artist</option>
                                    <option value="CakeBaker">Cake baker</option>
                                    <option value="Buffet">Buffet</option>
                                    <option value="Decorator">Decorator</option>
                                </select><br />

                                <label htmlFor="company">Company name</label>
                                <input type="text" name="company" id="company" placeholder="If you don't have that one, it will be your full name."
                                    onChange={(e) => {
                                        setCustomer({ ...customer, ['companyName']: e.target.value })
                                    }} /><br />

                                <label htmlFor="logo">Logo*</label>
                                <input type="file" name="logo" required className="fileWithMargin" onChange={(e) => {
                                    setCustomer({
                                        ...customer, ['logo']: e.target.files[0]
                                    })

                                }
                                } /><br />

                                <label>Portfolio*</label>
                                <div className="filesDiv">
                                    <input type="file" name="file" required className="fileWithMargin" onChange={(e) => {
                                        setCustomer({
                                            ...customer, ['image1']: e.target.files[0]
                                        })
                                    }} />
                                </div><br />

                                <label htmlFor="price">Price* /per work/</label>
                                <div className="priceInAMD">
                                    <input type="number" name="price" className="priceInput" required onChange={(e) => {
                                        setCustomer({ ...customer, ['price']: e.target.value });
                                        console.log(customer.occupation);
                                    }} />
                                    <input value="֏" className="currency" />
                                </div><br />

                                <label htmlFor="description">Describe your work in 150 Characters*</label>
                                <textarea maxLength="150" name="description" required onChange={(e) => {
                                    setCustomer({ ...customer, ['description']: e.target.value })
                                }}></textarea>
                            </> : null
                        }

                        <button name="btnone" className="firstbutton" onClick={registrationObject}>Sign Up</button>
                        <div className="or">
                            <div></div>
                            <span>or</span>
                            <div></div>
                        </div>
                        <button className="secondbutton" onClick={funcForLogin}>Log In</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Registration
