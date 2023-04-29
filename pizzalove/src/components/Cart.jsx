import React from 'react';

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className='cart-board'>
      <h2>Cart Items</h2>
      {cartItems.map((item) => (
        <div classname= 'cart-card' key={item.id}>
          <h3>{item.name}</h3>
          <p>Size: {item.size}</p>
          <p>Toppings: {item.toppings.join(', ')}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
      <p>Total Price : {totalPrice}</p>
    </div>
  );
}

export default Cart;
