import React, { useEffect, useState } from 'react'
import '../../App.css';
import Products from '../Products';
import ItemDetail from '../ItemDetails';
import Cart from '../Cart';

const Shop = () => {
  return (
    <>
      <h1 className='shop'>SHOP</h1>
      < Products />
    </>
  )
}

export default Shop