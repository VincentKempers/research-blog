import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Detailpage from "../Detailpage/Detailpage";
import Home from "../Home/Home";
import About from "../About/About";
// CSS
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detailpage" component={Detailpage} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Main;
