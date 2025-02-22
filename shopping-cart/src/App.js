import { React, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes as Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
// import Products from './components/pages/Products';
// import Services from './components/pages/Services';
// import SignUp from './components/pages/SignUp';
import Products from './components/Products';
import ItemDetail from './components/ItemDetails';

function App() {
 
  const [show, setShow] = useState(true);
  const [itemAmount, setItemAmount] = useState(0);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(`${itemAmount}`)
    setItemAmount(itemAmount + 1)

    // Update cart item quantity if already in cart
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
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
    
  };

  

  const handleChange = (id, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.id === id
          ? cartItem.amount + d < 1
            ? [] // <-- remove item if amount will be less than 1
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
          <Route path='/cart' exact element={< Cart />}></Route>
          {/* <Route path='/products' exact element={< Products />}></Route>
          <Route path='/sign-up' exact element={< SignUp />}></Route> */}
        {/* Add to Cart logic */}
         <Route
          path="/itemDetail/:id/:price/:title"
          element={<ItemDetail handleClick={handleClick} />}
        />
        <Route
          path="/Cart/"
          element={(
            <Cart
              cart={cart}
              setCart={setCart}
              setItemAmount={setItemAmount}
              handleChange={handleChange}
            />
          )}
        /> 

        </Switch>
      </Router>
  );
}

export default App;