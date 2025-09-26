import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './Cards.css'
import axios from 'axios';

// import WaterfallImg from "src/images/waterfall-img.jpg";

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
    


    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.cards');

        slides.forEach((cards, i) => {
            cards.style.display = i === index ? 'flex' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % 6;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000);


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
{data.slice(0, 3).map((product)=> (
    
    <div key={product.id} className="cards fade">
        {/* <h2>{product.title}</h2> */}
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                <CardItem 
                    src={product.image}
                    text={product.title}
                    label="New!"
                    path="/shop"
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

export default Cards;