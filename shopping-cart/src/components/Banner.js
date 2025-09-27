import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div>
    <body>
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
    </body>
    </div>
  )
}

export default Banner