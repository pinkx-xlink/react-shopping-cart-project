import React, { useEffect, useState } from 'react'
import '../../App.css';
import Cards from '../Cards';

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const items = [
    {
      id: 1,
      name: "overwatch",
      price: 20,
    },
    {
      id: 2,
      name: "minecraft",
      price: 32,
    },
    {
      id: 3,
      name: "fortnite",
      price: 51,
    },
  ];

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ))

  useEffect(() => {
    total();
  }, [cart]);
  
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));
    return (
        <>
          <h1 className='shop'>SHOP</h1>
          < Cards />
          <div>{listItems}</div>
          <div>CART</div>
          <div>{cartItems}</div>
        </>
    )
}