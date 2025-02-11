import {React, useState, useEffect} from 'react'
import Products from '../Products';
import ItemDetail from '../ItemDetails';
import Cart from './Cart';

const MyCart = () => {

    return (
        <>
            <h1>HELLOOOOO, let's checkout</h1>
                 {/* Add to Cart logic */}
        {/* <Route
          path="/itemDetail/:id/:price/:description"
          element={<ItemDetail handleClick={handleClick} />}
        />
        <Route
          path="/Cart/"
          element={(
            <Cart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          )}
        /> */}
     <Cart />
        </>
    )
}
export default MyCart