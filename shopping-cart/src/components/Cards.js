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
                    src="images/Filler.png"
                    text="Explore the hidden waterfall deep within the Amazon Jungle"
                    label="Adventure"
                    path="/shop"
                    />
                     <CardItem 
                    src="images/Filler.png"
                    text="Explore the hidden waterfall deep within the Amazon Jungle"
                    label="Adventure"
                    path="/shop"
                    />
                </ul>
                {/* copy and paste card component */}
                <ul className="cards__items">
                    <CardItem 
                    src="images/Filler.png"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/shop"
                    />
                     <CardItem 
                    src="images/Filler.png"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/shop"
                    />
                     <CardItem 
                    src="images/Filler.png"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/shop"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;