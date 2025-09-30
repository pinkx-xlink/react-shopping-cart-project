import React from 'react'
import './reviews.css';
import image1 from './reviewImg/lady.jpg';
import image2 from './reviewImg/lady1.jpg';
import image3 from './reviewImg/guy.jpg';

const Reviews = () => {
  return (
    <div>Reviews
        
        <div className='reviews_container'>
            <div className='review_card'>
                <div className='image-container'>
                    <img src={image1} alt="Lady leaning on railing above the water"></img>
                </div>
                <div className="image-container_text">
                    <h3>"Absolutely in love with this FakeShop jacket!"</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                    <h4> - Rose </h4>
                </div>
            </div>

            <div className='review_card'>
                <div className='image-container'>
                    <img src={image2} alt="Lady leaning on railing above the water"></img>
                </div>
                <div className="image-container_text">
                    <h3>"I've been ordering from FakeShop for years. My favorite place to buy jewelry!"</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                    <h4> - Genevieve </h4>
                </div>
            </div>
            <div className='review_card'>
                <div className='image-container'>
                    <img src={image3} alt="Lady leaning on railing above the water"></img>
                </div>
                <div className='image-container_text'>
                    <h3>"The products are high quality and shipping is fast. I'll buy from FakeShop again!"</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                    <h4> - Joseph </h4>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Reviews
