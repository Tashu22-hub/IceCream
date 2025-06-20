// src/components/Navbar.jsx
import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ bgColor }) => {
  console.log("navbar color :" ,bgColor);
  return (
    <nav className="navbar" style={{background: bgColor }}>
  <input type="checkbox" id="menu-toggle" />
  <label htmlFor="menu-toggle" className="menu-icon">☰</label>

  <div className="nav">
    <div className="logo">
      <img src="/chillz.png" alt="chillz" />
    </div>

    <ul className="nav-links">
      <li className="home">Home</li>
      <li className="shop">Shop</li>
      <li className="delivery">Delivery</li>
      <li className="contact">Contact</li>
    </ul>

    <button className="order-button">Order Your Ice-cream</button>
  </div>
</nav>

  );
};

export default Navbar;
