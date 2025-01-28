import React, {useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import './Products.css';
import CardItem from "./CardItem";
import Cards from "./Cards";
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
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards__items">
                            <CardItem 
                                src="images/Filler.png"
                                text={product.title}
                                label={product.price}
                                path="/shop"
                                />
                            </ul>
                            {/* copy and paste card component */}
                            {/* <ul className="cards__items">
                                <CardItem 
                                src="images/Filler.png"
                                text="Item 4 description text:"
                                label="Bedroom Decor"
                                path="/shop"
                                />
                                <CardItem 
                                src="images/Filler.png"
                                text="Item 5 description text:"
                                label="Home Decor"
                                path="/shop"
                                />
                                <CardItem 
                                src="images/Filler.png"
                                text="Item 6 description text:"
                                label="Bathroom Decor"
                                path="/shop"
                                />
                            </ul> */}
                        </div>
                    </div>
                    {/* <p> {product.price} </p>
                    <p> {product.title} </p>
                    <p> {product.description} </p> */}
                </div>
            ))}
        </div>
    );
};

export default Products