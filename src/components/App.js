import React, { Component } from "react";
import Header from "./Header/Header";
import "../styles/_global.css";
import "../styles/_colors.css";
import Main from "./Main/Main";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
