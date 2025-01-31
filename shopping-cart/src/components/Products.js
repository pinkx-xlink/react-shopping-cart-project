import React, {Component, useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import './Products.css';
import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  
  // for shopping 
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);



  useEffect(() => {
    setLoading(true);

    axios({
      method:"GET",
      url:"https://fakestoreapi.com/products"
    })
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch((e) => console.log(e))
    .finally(() => setLoading(false));
  }, []);
    
 

  // cart logic
  const items = data

  const listItems = items.map((product) => (
    <div key={product.id}>
      {`${product.title}: $${product.price}`}
      <input type="submit" value="add" onClick={() => addToCart(product)} />
    </div>
  ))

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    setCart(hardCopy);
  };

  const cartItems = cart.map((product) => (
    <div key={product.id}>
      {`${product.title}: $${product.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(product)} />
    </div>
  ));

  

  return (
    <>
      <h6>{cartItems}</h6>
      <h5>Total: ${cartTotal}</h5>
      <div className='products-container'>
          {loading && (
            <div> 
              {" "}
              <h1> Loading... </h1> 
            </div>
          )}

          {data.map((product)=> (
            <div key={product.id} className="card">
              <Link className="link__to__shop" to="/shop"><img src={product.image} alt="#"/></Link>
              <div className="card-description">
                <h2>{product.title}</h2>
                <h2> ${product.price} </h2>
                <h6> Descrption: {product.description} </h6>
                < ProductCounter />
                <input input type="submit" value="add" onClick={() => addToCart(product)} />
              </div>
            </div>   
          ))}
        </div>
    </>
  );
};

export default Products