import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="about-container">
      <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </nav>
      <h1>About Us</h1>
      <p>We are a pizza restaurant that specializes in creating delicious pizzas with fresh, high-quality ingredients. Our menu features a wide variety of toppings and crusts to suit any taste. We also offer vegetarian and gluten-free options.</p>
    </div>
  );
}

export default About;
