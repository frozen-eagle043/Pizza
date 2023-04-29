import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h4>About Us</h4>
            <p>We are a pizza restaurant that prides itself on using fresh, locally-sourced ingredients to create delicious and unique pizzas.</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <h4>Contact Us</h4>
            <ul>
              <li>1234 Main Street</li>
              <li>Amritsar, Punjab 12345</li>
              <li><a href="tel:555-555-5555">555-555-5555</a></li>
              <li><a href="mailto:shivamdevaser934@gmail.com">info@pizzarestaurant.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 Pizza Restaurant</p>
      </div>
    </footer>
  );
};

export default Footer;
