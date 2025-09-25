import React from 'react';
// import './signup.css';
import background from './background.jpg';

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
      <header>
            <h2 className="logo">MyWebsite</h2>
            <nav className="navigation">
                <button className="btnLogin-popup">Login</button>
            </nav>
        </header>

        <div className="wrapper">
            <span className="icon-close">
                <ion-icon name="close"></ion-icon>
            </span>

            <div className="form-box login">
                <h2>Login</h2>
                <form action="#">
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
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="login-register">
                        <p>Don't have an account? <a href="#" className="register-link">Register</a>
                        </p>
                    </div>
                </form>
            </div>


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
                        <p>Already have an account? <a href="#" className="login-link">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup