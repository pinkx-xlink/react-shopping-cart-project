import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './ItemDetails.css'
function ItemDetail({ handleClick }) {
    const { id, price, title } = useParams();
    let item = {id, price, title};

    console.log(item);

    return (
        <div className='card_container'>
            {/* 'card' classname gives it the css for Home page cards */}
            <div className='card'>
                <div className='product_info'>
                    <p>Product id: {id}</p>
                    <p>price: {price}</p>
                    <p>item: {title}</p>
                </div>
                <button onClick={() => handleClick(item)}> Add to Cart </button>
                <div className='nav_btns'>
                    <Link to="/shop"> X </Link>
                    <Link to="/cart"> Go to Cart </Link>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;