import React, { useState, useEffect } from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal.slice';
import ModalsEnum from '../../../enums/modal.enums';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import axios from 'axios';

const Login = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const forUsername = (event) => {
        setUsername(event.target.value);
    }

    const forPassword = (event) => {
        setPassword(event.target.value);
    }


    const funcForRegistration = () => {
        dispatch(openModal(ModalsEnum.REGISTRATION))
    }

    // 
    const closeLogin = () => {
        dispatch(openModal(ModalsEnum.CLOSE))
    }

    const [loggedInOrNot, setLoggedInOrNot] = useState("/");
    let pathhh = "";

    const loginObject = async () => {
        const userData = {
            "username": username,
            "password": password
        }
        // console.log(userData.username);
        // console.log(userData.password);

        // const res = await axios.post("http://localhost:8080/", userData);

        const res = await axios.post("http://192.168.88.192:8080/login", {}, {
            auth: {
              username: userData.username,
              password: userData.password
            }
          });
          console.log(res);
        // if(res.data == null){
            // setPathFromLogin("/");
            // await dispatch(openModal(ModalsEnum.LOGIN));
            // alert("There is not such an account. Please first register.");
        // }else{
            pathhh = "/account";
            setLoggedInOrNot(pathhh);
            await dispatch(openModal(ModalsEnum.CLOSE));
        // }
    }
    

    return (
        <>
            <section id="loginId">
                <div className="signinpart">
                    <div className="iconpart"><i class="fas fa-times" onClick={closeLogin}></i></div>
                    <h2>Log In</h2>
                    <form>
                        <label htmlFor="first">Username *</label>
                        <input type="text" id="first" name="first" required onChange={forUsername} /><br />
                        <label htmlFor="second">Password *</label>
                        <input type="password" id="second" name="second" required onChange={forPassword} />
                        <Link to="/account" className="firstbutton" onClick={loginObject}>Log In</Link>

                        <div className="or">
                            <div></div>
                            <span>or</span>
                            <div></div>
                        </div>
                        <button className="secondbutton" onClick={funcForRegistration}>Create an account</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login
