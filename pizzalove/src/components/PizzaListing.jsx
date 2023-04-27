import React, { useState, useEffect } from 'react';
import CustomizePopup from './CustomizePopup ';
import Cart from './Cart';

function PizzaListing() {
  const [pizzas, setPizzas] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  

  const addToCart = (pizza, size, toppings, quantity) => {
    const existingCartItem = cartItems.find(
      (item) => item.pizza.id === pizza.id && item.size === size && item.toppings === toppings
    );

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.pizza.id === pizza.id && item.size === size && item.toppings === toppings) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { pizza, size, toppings, quantity }]);
    }
    setShowPopup(!showPopup);
  };
  const handleClick = (pizza) => {
    setShowPopup(!showPopup);
    if(!selectedPizza)
    setSelectedPizza(pizza);
    else setSelectedPizza([])
  }

  const handleClickShowCart = () => {
    setShowPopup(!showCart);
  }
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
          <img src={pizza.img_url} alt={pizza.name} />
          <h1>{pizza.name}</h1>
          <p>{pizza.description}</p>
          <p>{pizza.rating} stars</p>
          <p>Price: ${pizza.price}</p>
          <p>{pizza.isVeg ? 'Vegetarian' : 'Non-vegetarian'}</p>
          <h2>Choose size:</h2>
          {showPopup ? <div>{selectedPizza && <CustomizePopup {...pizza} addToCart={addToCart} setShowPopup={setShowPopup}/>}</div> : <button onClick={handleClick(pizza)}>
            Customize
          </button>}
        </div>
      ))}
      <div>
      <button onClick={handleClickShowCart}>
            ShowCart
          </button>
          {showCart && <Cart setShowPopup={setShowCart}/>}
      </div>
    </div>
  );
}

export default PizzaListing;
