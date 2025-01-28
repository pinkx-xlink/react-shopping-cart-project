import React, {useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import './Products.css';
import CardItem from "./CardItem";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Products = () => {
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
        <div className='products-container'>
            {loading && (
                <div> 
                    {" "}
                    <h1> Loading... </h1> 
                </div>
            )}

            {data.map((product)=> (
                //  <Link className="cards__item__link" to={props.path}></Link>
                <div key={product.id} className="card">
                    <Link to="/shop"><img src={product.image} alt="#"/></Link>
                    <div className="card-description"> {product.description} 
                        <h6> {product.title} </h6>
                        <h6> ${product.price} </h6>
                        <h6> Descrption: {product.description} </h6>
                    </div>
                </div>   
            ))}
        </div>
    );
};

export default Products