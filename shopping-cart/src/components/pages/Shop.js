import React, { useState } from 'react'
import '../../App.css';
import Cards from '../Cards';

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (el) => {
    setCart([...cart, el]);
  };
  
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
    return (
        <>
          <h1 className='shop'>SHOP</h1>
          < Cards />
          <div>{items[0].name}</div>
        </>
    )
}