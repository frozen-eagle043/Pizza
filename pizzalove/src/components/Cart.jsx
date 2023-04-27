import React, { useState } from 'react';
// import './Cart.css';

function Cart({ cartItems }) {
  const [items, setItems] = useState(cartItems);

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = quantity;
    setItems(updatedItems);
  }

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  const total = items.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Size: {item.size}</p>
              <p>Toppings: {item.toppings.join(', ')}</p>
              <p>Price: ₹{item.price}</p>
            </div>
            <div className="item-controls">
              <button onClick={() => handleQuantityChange(index, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</button>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="total">Total: ₹{total}</p>
    </div>
  )
}

export default Cart;
