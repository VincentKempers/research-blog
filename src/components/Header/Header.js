import React, { Component } from "react";
import { Link } from "react-router-dom";
// CSS
import "./Header.css";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <h2><span class="red">V</span>inc<span class="green">ent</span><span class="yellow">K</span>empers</h2>
        </div>
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
        <ul className="App-header__links">
          <li><a href="https://twitter.com/vincentkempers">Twitter</a></li>
          <li><a href="https://github.com/VincentKempers">Github</a></li>
          <li><a href="mailto::me@vncn.tk">Email</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;