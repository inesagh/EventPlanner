import React from 'react';
import './Registration.css';

const Registration = () => {
    return (
        <section id="registrationId">
            <div className="registrationpart">
                <div className="iconpart"><i class="fas fa-times"></i></div>
                <h2>Registration</h2>
                <form method="post">
                    <label >First Name</label>
                    <input type="text" id="name" />
                        <label >Last Name</label>
                        <input type="text" id="lastName" />
                        <label >Enter E-mail</label>
                        <input type="text" id="email" />
                        <div id="div">
                        </div>
                            <label for="password">Enter Password</label>
                            <input type="password" id="password" name="password" />
                            <label for="confirmPassword">Enter Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" />
                            <div id="divcolor">
                            </div>
                            <div className="saveorlost">
                                <div>
                                    <input type="checkbox" name="save" id="check" />
                                    <label for="check">Remember me</label>
                                </div>
                                <p>Lost your password?</p>
                            </div>
                            <button name="btnone" value="btn1" id="btnbtn" className="firstbutton">Registration</button>
                            <div className="or">
                                <div></div>
                                <span>or</span>
                                <div></div>
                            </div>
                            <button className="secondbutton"><a href="#">Login</a></button>
					</form>
            </div>
    </section>
    )
}

export default Registration
