import React, { useState } from 'react';

function CustomizePopup({ size, toppings},addToCart) {

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
    addToCart();
  };

  return (
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
  );
}

export default CustomizePopup;
