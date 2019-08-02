import React, { Component } from "react";
import "./Detailpage.css";

class Detailpage extends Component {
  render() {
    return (
      <div className="Detailpage {{ article.theme }}">
        <h1>Content</h1>
      </div>
    );
  }
}

export default Detailpage;
