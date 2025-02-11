import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function ItemDetail({ handleClick }) {
    const { id, description, price } = useParams();
    let item = {id, description, price};

    console.log(item);

    return (
        <>
            <div>
                <p>Product id: {id}</p>
                <p>price: {price}</p>
                <p>description: {description}</p>
                <button onClick={() => handleClick(item)}> Add to Cart </button>
                <Link to="/shop">exit</Link>
            </div>
        </>
    );
}

export default ItemDetail;