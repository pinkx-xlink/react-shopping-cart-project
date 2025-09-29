import React from 'react'
import './reviews.css';
import image1 from './reviewImg/lady.jpg';

const Reviews = () => {
  return (
    <div>Reviews
        
        <div className='reviews_container'>
            <div className='review_card'>
                <div className='image-container'>
                    <img src={image1} alt="Lady leaning on railing above the water"></img>
                </div>
                
                <h3>"Absolutely in love with this!"</h3>
                <p>⭐⭐⭐⭐⭐</p>
                <h4> - Rose </h4>
            </div>

            <div className='review_card'>
                <div className='image-container'>
                    <img src={image1} alt="Lady leaning on railing above the water"></img>
                </div>
                <h3>"Absolutely in love with this!"</h3>
                <p>⭐⭐⭐⭐⭐</p>
                <h4> - Rose </h4>
            </div>
            <div className='review_card'>
                <div className='image-container'>
                    <img src={image1} alt="Lady leaning on railing above the water"></img>
                </div>
                <h3>"Absolutely in love with this!"</h3>
                <p>⭐⭐⭐⭐⭐</p>
                <h4> - Rose </h4>
            </div>
        </div>

        
    </div>
  )
}

export default Reviews
