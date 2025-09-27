import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './pages.css'
const Cart = ({ cart, setCart, handleChange }) => {
    const handleRemove = (id) => {
        setCart(cart => cart.filter(item => item.id !== id))
    };

    const price = cart.reduce((total, item) => total + item.amount * item.price, 0);
    const prettyPrice = price.toFixed(2);
    const salesTax = (price * 0.15).toFixed(2);
    const totalPrice = (price + parseFloat(salesTax)).toFixed(2);

    const results = [];
    // const showCartItems = ({ cart, setMyItems, handleChange }) => {
    //     setMyItems(cart, id => {
    //     results.push(
    //         <div key={id}>
    //             <h2>name: {item.title}</h2>
    //             <h2>price: {item.price}</h2>

    //             <hr />
    //         </div>,
    //     );
    // });
    // }
    
    // BUGS:
    // does not show each individual item in cart, 
    // only shows the total price and qty of total items.
    // Remove btn removes ALL ITEMS at once
    // only shows info for the first item, not all items in cart
    // only the "add" btn on the first two items work??
    console.log(setCart);

    return(
        <article>
            <Link to="/shop" className='exit-cart-btn'> x </Link>
             <h1>Cart</h1>
            {cart.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className='item_amount_el'>
                        <button onClick={() => handleChange(item.id, 1)}>+</button>
                        <p>{item.amount}</p>
                        <button onClick={() => handleChange(item.id, -1)}>-</button>
                    </div>
                    <div className='item_info'>
                        <div className='cart_item'>
                            <p>{item.title}</p> 
                            <p>${item.price}</p>
                        </div>
                        <button className="remove_btn" onClick={() => handleRemove(item.id)}>Remove All</button>
                    </div>
                </div>
            ))}
            
            <div>{results}</div>
            <ul>  </ul>
            <div className='total'>
                <span>Subtotal: ${prettyPrice} ({cart.length} items)</span>
                <p>Tax: ${salesTax}</p>
                <span id='total-price'>Total: ${totalPrice}</span>
                <button className='checkout-button'>Checkout</button>
            </div>
        </article>
    );
};

export default Cart;