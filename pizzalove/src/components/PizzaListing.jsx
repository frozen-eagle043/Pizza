import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
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
      (item) => item.name === name && item.size === size && item.toppings === toppings
    );
    
    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.name === name && item.size === size && item.toppings === toppings) {
          console.log('hi')
          return { ...item, quantity: item.quantity + 1 };
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
    <>
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </nav>
    <ul>
    <li><button onClick={handleClickShowCart}>
            Cart
          </button>
          {showCart && <Cart cartItems={cartItems}/>}</li>
    </ul>
    {!showCart && <div className='Board'>
      
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <PizzaCard {...pizza} addToCart = {addToCart}/>
        </div>
      ))}
      <div>
      </div>
    </div>}
    
    </>
  );
}

export default PizzaListing;
