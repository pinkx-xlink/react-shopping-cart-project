import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './ItemDetails.css'
import CardItem from './CardItem';

// TO-DO: 1. pass handleClick from Shop to here via Products
// 2. TROUBLESHOOT PRODUCT IMAGES; find out how to import
function ItemDetail({ handleClick,  }) {
    const { id, price, title } = useParams();
    let item = { id, price, title};
    
    console.log(item);

    return (
        <div className='card_container'>
            {/* 'card' classname gives it the css for Home page cards */}
            <div className='card'>
                <Link to="/shop" className='close-button'> X </Link>
                <div className='product_info'>
                    {/* <p>Product id: {id}</p> */}
                    
                    <p>${price}</p>
                    <p>item: {title}</p>
                </div>
                <p>Amount: {item.setItemAmount}</p>
                <button className='add-to-cart-button' onClick={() => handleClick(item)}>
                    <Link to="/shop"> Add to Cart </Link>
                </button>
                <div className='nav_btns'>
                    
                    <Link to="/cart"> Go to Cart </Link>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;