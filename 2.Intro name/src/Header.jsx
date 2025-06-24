import React from "react";
import "./index.css";
import logo from "./assets/logo.png";
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div> <img className="logo" src={logo} alt="Logo" /></div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;