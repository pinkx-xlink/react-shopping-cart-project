import { React, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes as Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import MyCart from './components/pages/MyCart';
// import Products from './components/pages/Products';
// import Services from './components/pages/Services';
// import SignUp from './components/pages/SignUp';
import Products from '../src/components/Products';
import ItemDetail from '../src/components/ItemDetails';
import Cart from '../src/components/Cart';


function App() {
 

  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact element={< Home />}></Route>
          <Route path='/shop' exact element={< Shop />}></Route>
          <Route path='/cart' exact element={< MyCart />}></Route>
          {/* <Route path='/products' exact element={< Products />}></Route>
          <Route path='/sign-up' exact element={< SignUp />}></Route> */}
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

        </Switch>
      </Router>
  );
}

export default App;