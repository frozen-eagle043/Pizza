import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Size: {item.size}</p>
          <p>Toppings: {item.toppings.join(', ')}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
