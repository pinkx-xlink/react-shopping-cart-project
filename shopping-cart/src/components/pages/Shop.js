import React, { useEffect, useState } from 'react'
import '../../App.css';
import Products from '../Products';
import ItemDetail from '../ItemDetails';
import Cart from '../Cart';

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
    }
  }
  return (
    <>
      <h1 className='shop'>SHOP</h1>
      < Products />
    </>
  )
}

export default Shop