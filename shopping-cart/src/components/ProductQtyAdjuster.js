import React, { useState, useEffect } from 'react';

const NumberAdjuster = () => {
  const [number, setNumber] = useState(0);

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }}
      />
      <button onClick={increaseNumber} style={{ marginRight: '5px' }}>
        Increase
      </button>
      <button onClick={decreaseNumber}>
        Decrease
      </button>
      <input input type="submit" value="add" onClick={() => addToCart(product)} />
    </div>
    </>
  );
};

export default NumberAdjuster;