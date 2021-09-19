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


    const funcForRegistration = async () => {
        await dispatch(openModal(ModalsEnum.REGISTRATION))
    }

    // 
    const closeLogin = async () => {
        await dispatch(openModal(ModalsEnum.CLOSE))
    }

    const [error, setError] = useState("");

    const loginObject = async () => {
        let path = "/";
        let encoded = window.btoa(`${username}:${password}`);
        localStorage.setItem("token", encoded);
        console.log("after encoding " + localStorage.getItem("token"));

        try {
            const res = await axios.get("https://backend.eventplanner.inchvorban.space/login", {}, {
                headers: {
                    'Content-Type': 'text/html',
                    'Authorization': "Basic " + localStorage.getItem("token"),
                    'Access-Control-Allow-Origin': '*'
                }
            });
            console.log(res);
        } catch {
            path = "/";
            setError("There is not such an account. Please first register.");
        }

        return path;
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

                        <p style={{ color: "red", fontSize: "1rem", fontWeight: "600" }}>{error ? error : null}</p>

                        <Link to={loginObject} className="firstbutton" onClick={loginObject}>Log In</Link>
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
