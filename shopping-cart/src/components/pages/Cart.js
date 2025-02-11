import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart, handleChange }) => {
    const handleRemove = (id) => {
        setCart(cart => cart.filter(item => item.id !== id))
    };

    const price = cart.reduce((total, item) => total + item.amount * item.price, 0);

    // BUGS:
    // does not show each individual item in cart, 
    // only shows the total price and qty of total items.
    // Remove btn removes ALL ITEMS at once
    // only shows info for the first item, not all items in cart
    // only the "add" btn on the first two items work??
    console.log(setCart);

    return(
        <article>
             <h1>HELLOOOOO, let's checkout</h1>
            {cart.map((item) => (

                <div className="cart_box" key={item.id}>
                    <div>

                        <button onClick={() => handleChange(item.id, 1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item.id, -1)}>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <p>CART</p>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>{item.id}</li>
                ))}
            </ul>
            <div className='total'>
                <span>Total Cart Price</span>
                <span>R - {price}</span>
            </div>
            <Link to="/shop">exit</Link>
        </article>
    );
};

export default Cart;