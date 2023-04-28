import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import PizzaCard from './PizzaCard';

function PizzaListing() {
  const [pizzas, setPizzas] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleClickShowCart = () => {
    setShowCart(!showCart);
  }
  const addToCart = (id,name, size, toppings,price, quantity) => {
    const existingCartItem = cartItems.find(
      (item) => item.id === id && item.size === size && item.toppings === toppings
    );

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === id && item.size === size && item.toppings === toppings) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { id,name, size, toppings,price, quantity }]);
    }
   
    console.log(cartItems)
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68'
        );

        if (!response.ok) {
          throw new Error('Unable to fetch pizza data');
        }

        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <PizzaCard {...pizza} addToCart = {addToCart}/>
        </div>
      ))}
      <div>
      <button onClick={handleClickShowCart}>
            ShowCart
          </button>
          {showCart && <Cart cartItems={cartItems}/>}
      </div>
    </div>
  );
}

export default PizzaListing;
