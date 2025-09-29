// import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// // import "./App.css"; // Import CSS for animations
// import './animatedImages.css';
// import placeholder1 from './reviewImg/lady1.jpg';
// import placeholder2 from './reviewImg/guy.jpg';
// import './animatedImages.css';
// import { Placeholder } from "react-bootstrap";
// import CardItem from "./CardItem";


// const ImageSlide = ({ src, alt }) => {
//   // Hook to detect if the image is in view
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.1, // Trigger when 10% of the image is visible
//   });


//   // Now, get the item details from Fake Store API

//   return (
//     <div
//       ref={ref}
//       className={`image-container ${inView ? "slide-in" : "hidden"}`}
//     >
//       <CardItem src={src} alt={alt} />
//     </div>
//   );
// };

// const AnimatedImages = () => {
//   const images = [
//   placeholder1, placeholder2, Placeholder
//   ];

//   return (
//     <div className="app">
//       <h1>Scroll to See Images Slide In</h1>
//       {images.map((src, index) => (
//         <ImageSlide key={index} src={src} alt={`Image ${index + 1}`} />
//       ))}
//     </div>
//   );
// };

// // export default AnimatedImages;