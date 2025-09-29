import React, { useRef } from "react";
//import "./App.css"; // Add your styles here
import placeholder from './reviewImg/lady.jpg';

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


<style>
    {`
    App {
display: flex;
align-items: center;
}

images-container {
display: flex;
overflow-x: auto;
scroll-behavior: smooth; /* Enables smooth scrolling */
max-width: 600px;
}

image {
width: 200px;
height: auto;
margin: 5px;
}

nav-btn {
background-color: #ccc;
border: none;
padding: 10px;
cursor: pointer;
}
    `}
</style>
</div>

);
};

export default AnimatedCards;