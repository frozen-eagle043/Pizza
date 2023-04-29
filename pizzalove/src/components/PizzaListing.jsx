import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import PizzaCard from './PizzaCard';
import Footer from './Footer';

function PizzaListing() {
  const [pizzas, setPizzas] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showVeg, setShowVeg] = useState(false);
  const [sortBy, setSortBy] = useState('rating'); // initial sort by rating

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };
  const handleShowVegChange = () => {
    setShowVeg(!showVeg);
  };
  const sortedPizza = [...pizzas].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating; // sort by descending order of rating
    } else if (sortBy === 'price') {
      return a.price - b.price; // sort by ascending order of price
    } else {
      return 0; // no sorting
    }
  });

  const filteredPizzas = showVeg
    ? sortedPizza.filter((pizza) => pizza.isVeg)
    : showVeg === false
    ? sortedPizza.filter((pizza) => (!pizza.isVeg || pizza.isVeg))
    : sortedPizza;

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
    <li><button className='cart-button' onClick={handleClickShowCart}>
            Cart
          </button>
          {showCart && <Cart cartItems={cartItems}/>}</li>
    </ul>

    {!showCart && <div className='Board'>
      <div className='header'>
        <div>
    <h1 className='Heading'>Pizza List</h1>
      <label className='sort' htmlFor="sort-by">Sort by:</label>
      <select className='sort-by' id="sort-by" onChange={handleSort} value={sortBy}>
        <option value="rating">Rating</option>
        <option value="price">Price</option>
      </select>
      </div>
      <div className='veg-check'>
        <input
          type="checkbox"
          id="show-veg"
          checked={showVeg}
          onChange={handleShowVegChange}
        />
        <label htmlFor="show-veg">Show only vegetarian</label>
      </div>
      </div>
      {filteredPizzas.map((pizza) => (
        <div key={pizza.id}>
          <PizzaCard {...pizza} addToCart = {addToCart}/>
        </div>
      ))}
      <div>
      </div>
    </div>}
    <Footer/>
    </>
  );
}

export default PizzaListing;
