import React, {Component, useEffect, useState} from "react";
// import '../App.css';
import axios from "axios";
import './Products.css';
import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";
import ItemDetail from "./ItemDetails";
const Products = () => {

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
    

  return (
    <>
      <div className='products-container'>
          {loading && (
            <div> 
              {" "}
              <h1> Loading... </h1> 
            </div>
          )}

          {data.map((product)=> (
            <div key={product.id} className="card">
              <Link className="link__to__shop" to={`/itemDetail/${product.id}/${product.price}/${product.title}`}>
                <h2>{product.title}</h2>
                <div className="product-info">
                  <img src={product.image} alt="#"/>
                  <div className="card-description">
                    <h4> Description: {product.description.slice(0, 150)}... </h4>
                    {/* < ProductCounter /> */}
                  </div>
                </div>
                <h3><u>${product.price}</u></h3>
                <input type="submit" value="add" className="add-to-cart-button"/>
              </Link>
             
            </div>   
          ))}
        </div>
    </>
  );
};

export default Products