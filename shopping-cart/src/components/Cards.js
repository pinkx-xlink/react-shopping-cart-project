import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
// import WaterfallImg from "src/images/waterfall-img.jpg";

function Cards() {
  return (
    <div className="cards">
        <h1>Check out these epic destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="/images/Img9.jpg"
                    text="Explore the hidden waterfall deep within the Amazon Jungle"
                    label="Adventure"
                    path="/services"
                    />
                     <CardItem 
                    src="/images/Img9.jpg"
                    text="Explore the hidden waterfall deep within the Amazon Jungle"
                    label="Adventure"
                    path="/services"
                    />
                </ul>
                {/* copy and paste card component */}
                <ul className="cards__items">
                    <CardItem 
                    src="/images/Img2.jpg"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/services"
                    />
                     <CardItem 
                    src="/images/Img2.jpg"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/services"
                    />
                     <CardItem 
                    src="/images/Img2.jpg"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;