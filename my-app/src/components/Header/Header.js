import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
// CSS
import "./Header.css";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <ul class="App-header__links">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/detailpage"> Detailpage </Link>
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
