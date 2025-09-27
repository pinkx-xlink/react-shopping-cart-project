import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import cartImg from '../images/cart.svg';
import Signup from './pages/Signup';
import './Banner.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

    console.log('nav bar');


  return (
    <>
        <div>
            <div id="bannerContainer">
                <div id="bannerSlider">
                    <div class="banner">
                        <h1>LIMITED TIME DEALS</h1>
                        <p>This week only</p>
                    </div>
                    <div class="banner">
                        <h1>Free Shipping on Orders $75+</h1>
                        <p>Use code: FREE75 for extra 10% off</p>
                    </div>
                    <div class="banner">
                        <h1>SEASONAL SALE</h1>
                        <p>*Special cashback offer. Limited time only!</p>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar">
            <div className="navbar-container">
                {/* replaces <a> tag  */}
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  FakeShop 
                  <i className="fab fa-typo3" />   
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                        to='/shop' 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                        >
                        Shop
                        </Link>
                    </li>
                   
                    <li className='nav-item'>
                        <Link 
                        to='/cart' 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                        >
                        <img 
                        src={cartImg} 
                        alt="Cart" 
                        height={"50px"}
                        width={"50px"}
                        className='cart-icon'
                        />
                        </Link>
                    </li>
                    {/*<li className='nav-item'>
                        <Link 
                        to='/sign-up' 
                        className='nav-links-mobile' 
                        onClick={closeMobileMenu}
                        >
                        Sign Up
                        </Link>
                    </li> */}
                </ul>
                <button className='login_nav-button'>
                    <Link 
                        to='/login'
                        className='nav-link__login' 
                        onClick={closeMobileMenu}
                    >Login 
                    </Link>
                </button>
            </div>
        </nav>
    </>
  );
}

export default Navbar; 