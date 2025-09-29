import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './Cards.css'
import axios from 'axios';
import AnimatedImages from './AnimatedImages';
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

export default Cards;