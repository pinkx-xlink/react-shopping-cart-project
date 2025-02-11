import React, { useState, useEffect } from 'react'
const Cart = ({ cart, setCart, handleChange }) => {
    const handleRemove = (id) => {
        setCart(cart => cart.filter(item => item.id !== id))
    };

    const price = cart.reduce((total, item) => total + item.amount * item.price, 0);


    console.log(setCart);

    return(
        <article>
            {cart.map((item) => (
                <div className="cart_box" key="item.id">
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
            <div className='total'>
                <span>Total Cart Price</span>
                <span>R - {price}</span>
            </div>
        </article>
    );
};

export default Cart;