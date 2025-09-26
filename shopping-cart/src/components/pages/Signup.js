import React from 'react';
// import './signup.css';
import background from './background.jpg';
import { Link } from 'react-router-dom';

// TO DO: split login and signup into separate components

const Signup = () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');


    // registerLink.addEventListener('click', () => {
    //     wrapper.classList.add('active');
    // });

    // loginLink.addEventListener('click', () => {
    //     wrapper.classList.remove('active');
    // });

    // btnPopup.addEventListener('click', () => {
    //     wrapper.classList.add('active-popup');
    // });

    // iconClose.addEventListener('click', () => {
    //     wrapper.classList.remove('active-popup');
    // });

  return (
    <>
        <style>{`
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body{
                font-family: 'Poppins', sans-serif;
                background: url(${background}) no-repeat center center fixed;
                background-size: cover;
            }
            .wrapper{
                width: 100%;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
                }

                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }


.logo {
    font-size: 2em;
    color: #fff;
    user-select: none;
}

.navigation a {
    position: relative;
    font-size: 1.1em;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 40px;
}
.navigation a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background-color: #fff;
  border-radius: 5px;
}

.navigation .btnLogin-popup {
    width: 130px;
    height: 50px;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    font-size: 1.1em;
    color: #fff;
    font-weight: 500;
    margin-left: 40px;
}

.navigation .btnLogin-popup:hover {
    background-color: #fff;
    color: pink;
}

.wrapper {
  position: relative;
  width: 400px;
  height: 440px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.wrapper.active {
    height: 520px;
}

.wrapper .form-box {
  width: 100%;
  padding: 40px;
}


.wrapper .form-box.register {
    position: absolute;
}

.wrapper.active .form-box.register {
    position: absolute;
}

.form-box h2 {
  font-size: 2em;
  color: #162938;
  text-align: center;
}

.input-box {
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 30px 0;
}

.input-box label {
    position: absolute;
    top: 50%;
    left: 5px;
    color: #162938;
    font-size: 1em;
    pointer-events: none;
    transition: .5s;
    font-weight: 500;
    transition: .5s;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
    top: -5px;
    color: #162938;
    font-size: 0.8em;
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;    
    border: none;
    outline: none;
    font-size: 1em;
    color: #162938;
    font-weight: 600;
    padding: 0 35px 0 5px;
}

.input-box .icon {
    position: absolute;
    right: 8px;
    color: #162938;
    font-size: 1.2em;
    cursor: pointer;
    line-height: 57px;
}

.rememeber-forgot {
    margin: -15px 0 15px;
    font-size: 0.9em;
    color: #162938;
    display: flex;
    justify-content: space-between;
}

.rememeber-forgot label input {
    accent-color: #162938;
    margin-right: 3px;
}

.rememeber-forgot a {
    color: #162938;
    text-decoration: none;
}

.rememeber-forgot a:hover {
    text-decoration: underline;
}

.btn {
    width: 100%;
    height: 50px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.2em;
    color: #fff;
    font-weight: 600;
}

.login-register {
    margin: 25px 0 10px;
    text-align: center;
    font-size: 0.9em;
    color: #162938;
    font-weight: 500;
}

.login-register p a {
    color: #162938;
    text-decoration: none;
    font-weight: 600;
}

.login-register p a:hover {
    text-decoration: underline;
}

.wrapper .icon-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background: #162938;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    border-bottom-left-radius: 20px;
    line-height: 30px;
    cursor: pointer;
    z-index: 1;
}
        `}
        </style>  

        <div className="wrapper">
            <span className="icon-close">
                <ion-icon name="close"></ion-icon>
            </span>

            <div className="form-box register">
                <h2>Registration</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                        <input type="text" required/>
                        <label>Username</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" required/>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>
                        I agree to the terms & conditions
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <div className="login-register">
                        <p>Already have an account? 
                            {/* <a href="#" className="login-link">Login</a> */}
                            <Link to="/login" className="login-link">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup