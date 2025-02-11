import { React, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes as Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
// import Products from './components/pages/Products';
// import Services from './components/pages/Services';
// import SignUp from './components/pages/SignUp';
import Products from '../src/components/Products';
import ItemDetail from '../src/components/ItemDetails';
import Cart from '../src/components/Cart';


function App() {
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
    ? cartItem.id + d < 1
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
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact element={< Home />}></Route>
          <Route path='/shop' exact element={< Shop />}></Route>
          {/* <Route path='/products' exact element={< Products />}></Route>
          <Route path='/sign-up' exact element={< SignUp />}></Route> */}
        <Route
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
        />

        </Switch>
      </Router>
  );
}

export default App;