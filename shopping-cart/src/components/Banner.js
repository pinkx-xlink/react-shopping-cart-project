import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div>
    <body>
        <div id="bannerContainer">
            <div id="bannerSlider">
                <div class="banner">
                    <h1>First Slide</h1>
                    <p>Some information here</p>
                </div>
                <div class="banner">
                    <h1>Second Slide</h1>
                    <p>More information</p>
                </div>
                <div class="banner">
                    <h1>Third Slide</h1>
                    <p>Final information</p>
                </div>
            </div>
        </div>
    </body>
    </div>
  )
}

export default Banner