import React, { useState, useEffect } from 'react'
const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });

    console.log(setCart);

    return(
        <article>
            {cart.map((item) => (
                <div className="cart_box" key="item.id">
                    <div>
                        <button onClick={() => handleChange(item, 1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className='total'>
                <span>Total Cart Price</span>
                <span>R - {price}</span>
            </div>
        </article>
    );
};

export default Cart;