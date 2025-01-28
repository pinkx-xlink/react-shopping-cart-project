import React, { useEffect, useState } from 'react'
import '../../App.css';
import Products from '../Products';
import axios
 from 'axios';
const Shop = () => {
 
    return (
        <>
          <h1 className='shop'>SHOP</h1>
          < Products />
        
        </>
    )
}

export default Shop