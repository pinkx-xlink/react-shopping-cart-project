import React, { useEffect, useState } from 'react'
import '../../App.css';
import Products from '../Products';
import ItemDetail from '../ItemDetails';
import Cart from '../Cart';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const Shop = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    // Update cart item qty if already in the cart
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      setCart((cart) => 
      cart.map((cartItem) =>
        cartItem.id === item.id
      ? {
        ...cartItem,
        amount: cartItem.amount + 1
      } 
    : cartItem
  )
);
return;
    }
    // Add to cart
    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 }
    ]);
  };
  
  const handleChange = (id, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) => 
        cartItem.id === id
          ? cartItem.amount + d < 1
          ? [] // remove item if amount will be less than 1
          : [
              {
                ...cartItem,
                amount: cartItem.amount + d
              }
            ]
          : [cartItem]
        )
      );
    };


  return (
    <>
    
      <h1 className='shop'>SHOP</h1>
      < Products />
    
    </>
  )
}

export default Shop