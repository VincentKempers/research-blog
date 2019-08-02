import React, { Component } from "react";
import logo from "./logo.svg";
import "./Detailpage.css";

class Detailpage extends Component {
  render() {
    return (
      <div className="Detailpage">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default Detailpage;
