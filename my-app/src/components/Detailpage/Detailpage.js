import React, { Component } from "react";
import "./Detailpage.css";

class Detailpage extends Component {
  render() {
    return (
      <div className="Detailpage {{ article.theme }}">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default Detailpage;
