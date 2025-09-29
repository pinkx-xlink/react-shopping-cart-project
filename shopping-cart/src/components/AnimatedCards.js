import React, { useRef } from "react";
//import "./App.css"; // Add your styles here
import placeholder from './reviewImg/lady.jpg';
import './animatedCards.css';

const AnimatedCards = () => {
const sliderRef = useRef(null);
const scrollAmount = 200; // Amount to scroll on button click

const scrollLeft = () => {
sliderRef.current.scrollLeft -= scrollAmount;
};

const scrollRight = () => {
sliderRef.current.scrollLeft += scrollAmount;
};

const images = [
"https://via.placeholder.com/200",
"https://via.placeholder.com/200",
"https://via.placeholder.com/200",
"https://via.placeholder.com/200",
];

return (
<div className="App">
<button className="nav-btn" onClick={scrollLeft}>{"<"}</button>
<div className="images-container" ref={sliderRef}>
{images.map((src, index) => (
<img key={index} src={src} alt={`Slide ${index}`} className="image" />
))}
</div>
<button className="nav-btn" onClick={scrollRight}>{">"}</button>

</div>

);
};

export default AnimatedCards;