import React, { useState } from "react";

const ProductCounter = () => {
  // for # adjuster
  const [number, setNumber] = useState(0);

    // number adjuster logic 
    const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
        setNumber(value);
    }
    };

    const increaseNumber = () => {
    setNumber(number + 1);
    };

    const decreaseNumber = () => {
    setNumber(number - 1);
    };

    return (
        <div>
            <input
            type="number"
            value={number}
            onChange={handleInputChange}
            style={{ marginRight: '10px' }}
            />
            <button 
            onClick={increaseNumber} 
            style={{ marginRight: '5px' }}>
            Increase
            </button>
            <button onClick={decreaseNumber}>
            Decrease
            </button>
        </div>
    )
}

export default ProductCounter