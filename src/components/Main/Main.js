import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Articles from "../Articles/Articles";
import Home from "../Home/Home";
import About from "../About/About";
// CSS
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="mainContent">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Main;
