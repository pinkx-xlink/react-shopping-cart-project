import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function ItemDetail({ handleClick }) {
    const { id, price, title } = useParams();
    let item = {id, price, title};

    console.log(item);

    return (
        <>
            <div>
                <p>Product id: {id}</p>
                <p>price: {price}</p>
                <p>item: {title}</p>
                <button onClick={() => handleClick(item)}> Add to Cart </button>
                <Link to="/shop">exit</Link>
            </div>
        </>
    );
}

export default ItemDetail;