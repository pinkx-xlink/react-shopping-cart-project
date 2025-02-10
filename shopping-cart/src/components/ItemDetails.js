import React from 'react'
import { useParams } from 'react-router-dom'

function ItemDetail(handleClick) {
    const params = useParams();
    let { productCode, vendor, value} = params;
    let item = {productCode, vendor, value};

    console.log(item);

    return (
        <>
            <div>
                <p>Product id: {id}</p>
                <p>price: {price}</p>
                <p>description: {description}</p>
                <button onClick={() => handleClick(item)}> Add to Cart </button>
            </div>
        </>
    );
}