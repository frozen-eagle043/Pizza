import React from 'react'
import { useState } from 'react';
//import CustomizePopup from './CustomizePopup ';
const PizzaCard = ({id,name,description,isVeg,rating,price,img_url,size,toppings, addToCart}) => {
  const [showPopup, setShowPopup] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleToppingChange = (event) => {
    const toppingName = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedToppings((prevToppings) => [...prevToppings, toppingName]);
    } else {
      setSelectedToppings((prevToppings) =>
        prevToppings.filter((topping) => topping !== toppingName)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the selected size and toppings (e.g. add to cart)
    console.log('Selected size:', selectedSize);
    console.log('Selected toppings:', selectedToppings);

    // Close the popup
    addToCart(id,name, selectedSize,selectedToppings,price,1);
    setShowPopup(false);
  };


  //const [selectedPizza, setSelectedPizza] = useState(null);
//   const addToCart = (id, size, toppings, quantity) => {
//     const existingCartItem = cartItems.find(
//       (item) => item.id === id && item.size === size && item.toppings === toppings
//     );

//     if (existingCartItem) {
//       const updatedCartItems = cartItems.map((item) => {
//         if (item.id === id && item.size === size && item.toppings === toppings) {
//           return { ...item, quantity: item.quantity + quantity };
//         } else {
//           return item;
//         }
//       });
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { id, size, toppings, quantity }]);
//     }
//     setShowPopup(false);
//     console.log(cartItems)
//   };
    const handleClick = () => {
        setShowPopup(true);
      }
  return (
    <div>
        {<div key={id}>
          <img src={img_url} alt={name} />
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{rating} stars</p>
          <p>Price: ${price}</p>
          <p>{isVeg ? 'Vegetarian' : 'Non-vegetarian'}</p>
          {showPopup ?
            <div className="popup">
            <div className="popup-content">
                <h2>Customize your pizza</h2>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="size">Size:</label>
                    <select id="size" value={selectedSize} onChange={handleSizeChange}>
                    <option value="">Choose size</option>
                    {size[0].items.map((item, index) => (
                <option key={index} value={item.size}>
                    {item.size}
                </option>
                ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Toppings:</label>
                    {toppings[0].items.map((item, index) => (
                <label key={index}>
                <input
                    type={toppings[0].isRadio ? 'radio' : 'checkbox'}
                    name="toppings"
                    value={item.name}
                    onChange={handleToppingChange}
                />
                {item.name}
                        </label>
                    ))}
                </div>
                <button type="submit">Add to cart</button>
                </form>
            </div>
            </div>
        : <button onClick={handleClick}>
                    Customize
                </button>}
        </div>}
    </div>
  )
}

export default PizzaCard