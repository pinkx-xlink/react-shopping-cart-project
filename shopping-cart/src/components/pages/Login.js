import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  
  return (
    <div>
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
                        <p>Don't have an account? 
                            <Link 
                                to='/signup' 
                                // onClick={closeMobileMenu}
                            >Sign Up
                            </Link>
                            {/* <a href="#" className="register-link">Register</a> */}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login