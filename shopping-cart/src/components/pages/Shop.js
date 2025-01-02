import React from 'react'
import '../../App.css';
import Cards from '../Cards';

export default function Shop() {
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
    return (
        <>
          <h1 className='shop'>SHOP</h1>
          < Cards />
          <div>{items[0].name}</div>
        </>
    )
}