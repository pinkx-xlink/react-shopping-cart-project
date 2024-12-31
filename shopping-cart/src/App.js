import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from './components/pages/Home';
// import Products from './components/pages/Products';
// import Services from './components/pages/Services';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact element={< Home />}></Route>
          {/* <Route path='/services' exact element={< Services />}></Route>
          <Route path='/products' exact element={< Products />}></Route>
          <Route path='/sign-up' exact element={< SignUp />}></Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;