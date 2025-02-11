import React, { useEffect, useState } from 'react'
import '../../App.css';
import Products from '../Products';
import ItemDetail from '../ItemDetails';
import Cart from '../Cart';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const Shop = () => {



  return (
    <>
    
      <h1 className='shop'>SHOP</h1>
      < Products />
    
    </>
  )
}

export default Shop