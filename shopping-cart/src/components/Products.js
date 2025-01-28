import React, {useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import './Products.css';

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
                <div key={product.id} className="product-card">
                    <p> {product.price} </p>
                    <p> {product.title} </p>
                    <p> {product.description} </p>
                </div>
            ))}
        </div>
    );
};

export default Products