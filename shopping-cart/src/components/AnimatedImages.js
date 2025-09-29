import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css"; // Import CSS for animations

const ImageSlide = ({ src, alt }) => {
  // Hook to detect if the image is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the image is visible
  });

  return (
    <div
      ref={ref}
      className={`image-container ${inView ? "slide-in" : "hidden"}`}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

const App = () => {
  const images = [
    "https://via.placeholder.com/400x300?text=Image+1",
    "https://via.placeholder.com/400x300?text=Image+2",
    "https://via.placeholder.com/400x300?text=Image+3",
  ];

  return (
    <div className="app">
      <h1>Scroll to See Images Slide In</h1>
      {images.map((src, index) => (
        <ImageSlide key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default App;