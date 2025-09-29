import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './Cards.css'
import axios from 'axios';
import AnimatedImages from './AnimatedImages';
// import WaterfallImg from "src/images/waterfall-img.jpg";

import { useInView } from "react-intersection-observer";
// import "./App.css"; // Import CSS for animations
import './animatedImages.css';
import placeholder from './reviewImg/lady.jpg';
import placeholder1 from './reviewImg/lady1.jpg';
import placeholder2 from './reviewImg/guy.jpg';
import './animatedImages.css';


const Cards = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);

        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products"
        })
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }, []);
    
  return (
    <>
    
    <div className='products-container'>
        {loading && (
            <div> 
                {" "}
                <h1> Loading... </h1> 
            </div>
        )}

<div className='product-cards-container'>
{data.slice(0, 5).map((product)=> (
    
    <div key={product.id} className="cards">
        {/* <h2>{product.title}</h2> */}
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                <CardItem 
                    src={product.image}
                    text={product.title}
                    label="Best Seller"
                    path="/shop"
                    alt={product}
                />
                </ul>
            </div>
        </div>
    </div>
    
    ))}
    </div>
    </div>
    </>
  )
}


const ImageSlide = ({ src, alt }) => {
  // Hook to detect if the image is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the image is visible
  });


  // Now, get the item details from Fake Store API

  return (
    <div
      ref={ref}
      className={`image-container ${inView ? "slide-in" : "hidden"}`}
    >
      <img src={src} alt={alt} />
    </div>
  );
};



const AnimatedCardImages = () => {
  const images = [
    <Cards />
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

export default AnimatedCardImages;

// export default Cards;