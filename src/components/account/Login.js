import React from 'react';
import Header from '../header/Header';
import Pictures from '../pictures/Pictures';
import './Login.css';
import './Registration.css';
import Registration from './Registration';

const Login = (props) => {
    let registration = false;
    const funcForRegistration = () => {
        registration = !registration;
    }

    let classnameForCloseLogin = true;
    const closeLogin = () => {
        classnameForCloseLogin = false;
    }

    let selectedRole = null;

    return (
        <>
            <section id={props.forId ? "loginId" : null} className={props.forClass ? "noneLogin" : null}>
                <div className="signinpart">
                    <div className="iconpart"><i class="fas fa-times"></i></div>
                    <h2>Sign In</h2>
                    <form method="post">
                        <label for="first">Username or email address *</label>
                        <input type="text" id="first" name="first" /><br />
                        <label for="second">Password *</label>
                        <input type="text" id="second" name="second" />
                        <button value="Login" className="firstbutton">Sign in</button>
                        <div className="or">
                            <div></div>
                            <span>or</span>
                            <div></div>
                        </div>
                        <button className="secondbutton" onClick={funcForRegistration}>Create an account</button>
                    </form>
                </div>
            </section>

            {/* <section id={registration ? "registrationId" : null} className={!registration ? "noneRegistration" : null}> */}
                <section id="registrationId" style={{display: classnameForCloseLogin ? "close" : null}}>
                <div className="registrationpart">
                    <div className="iconpart"><i class="fas fa-times" onClick={closeLogin}></i></div>

                    <h2>Registration</h2>
                    <form method="post">
                        <label for="name">First Name*</label>
                        <input type="text" id="name" name="name" required /><br />
                        <label for="lastName">Last Name*</label>
                        <input type="text" id="lastName" name="lastName" required /><br />

                        <label for="email">Enter E-mail*</label>
                        <input type="email" id="email" name="email" required /><br />
                        <label for="phone">Enter Phone*</label>
                        <input type="tel" id="phone" name="phone" required /><br />

                        <label>Enter Gender*</label>
                        <div className="genderLabel">
                            <label for="male"><input type="radio" id="male" className="genderClassname" name="gender" required />
                                Male    </label>
                            <label for="female"><input type="radio" id="female" className="genderClassname" name="gender" required />
                                Female</label>
                        </div><br />

                        <label for="birthday">Date of Birthday*</label>
                        <input type="date" id="birthday" name="birthday"></input><br />

                        <label for="username">Username*</label>
                        <input type="text" id="username" name="username"></input><br />

                        <label for="password">Enter Password*</label>
                        <input type="password" id="password" name="password" required /><br />
                        <label for="confirmPassword">Confirm Password*</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required /><br/>

                        <label for="role">Role*</label>
                        <select value={selectedRole} className="roles">
                            <option value="c">Customer</option>
                            <option value="e">Employee</option>
                            {console.log(selectedRole)}
                        </select>

                        <button name="btnone" value="btn1" id="btnbtn" className="firstbutton">Registration</button>
                        <div className="or">
                            <div></div>
                            <span>or</span>
                            <div></div>
                        </div>
                        <button className="secondbutton">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login
