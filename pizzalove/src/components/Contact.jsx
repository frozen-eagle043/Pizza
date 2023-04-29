import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className="contact-container">
      <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Home</Link></li>
        
      </ul>
    </nav>
      <h1>Contact Us</h1>
      <p>Address: 123 Main St, Amritsar, punjab</p>
      <p>Phone: +91 9915140115</p>
      <p>Email: info@pizzarestaurant.com</p>
    </div>
  );
}

export default Contact;
