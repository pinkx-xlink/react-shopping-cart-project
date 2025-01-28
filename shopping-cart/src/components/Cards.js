import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
// import WaterfallImg from "src/images/waterfall-img.jpg";

function Cards() {
    
  return (
    <div className="cards">
        <h1>Check out our top picks for the season</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                <CardItem 
                    src="images/Filler.png"
                    text="Item 1 description text:"
                    label="Beauty"
                    path="/shop"
                    />
                    <CardItem 
                    src="images/Filler.png"
                    text="Item 2 description text:"
                    label="Womens Fashion"
                    path="/shop"
                    />
                     <CardItem 
                    src="images/Filler.png"
                    text="Item 3 description text:"
                    label="Men's Fashion"
                    path="/shop"
                    />
                </ul>
                {/* copy and paste card component */}
                <ul className="cards__items">
                    <CardItem 
                    src="images/Filler.png"
                    text="Item 4 description text:"
                    label="Bedroom Decor"
                    path="/shop"
                    />
                     <CardItem 
                    src="images/Filler.png"
                    text="Item 5 description text:"
                    label="Home Decor"
                    path="/shop"
                    />
                     <CardItem 
                    src="images/Filler.png"
                    text="Item 6 description text:"
                    label="Bathroom Decor"
                    path="/shop"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;