import React, { Component } from "react";
import { Link } from "react-router-dom";
// CSS
import "./Header.css";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src="https://via.placeholder.com/250x60" alt="Logo"/>
        <ul className="App-header__links">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/articles"> Articles </Link>
          </li>
          <li>
            <Link to="/About"> About me </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
