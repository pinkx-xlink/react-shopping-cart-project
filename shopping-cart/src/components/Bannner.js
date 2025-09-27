import React from 'react';

const Bannner = () => {
  return (
    <div>
        <style>
            #bannerContainer {
                width: 100%;
                overflow: hidden;
            }

            #bannerSlider {
                display: flex;
                width: 300%;
                animation: slide 15s infinite;
            }

            .banner {
                width: 33.33%;
                height: 300px;
                text-align: center;
                color: white;
                padding: 50px;
            }

            .banner:nth - child(1) {
                background-color: #007BFF;
            }

            .banner:nth - child(2) {
                background-color: #28a745;
            }

            .banner:nth - child(3) {
                background-color: #FFC107;
            }

            @keyframes slide {
                0% {
                    transform: translateX(0);
                }
                33% {
                    transform: translateX(-33.33%);
                }
                66% {
                    transform: translateX(-66.66%);
                }
                100% {
                    transform: translateX(0);
                }
            }
        </style>

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

export default Bannner