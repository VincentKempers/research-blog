import React, { Component } from "react";
import "./Articles.css";

class Article extends Component {
  render() {
    return (
      <div className="Article {{ article.theme }}">
        <h1>List of articles</h1>
      </div>
    );
  }
}

export default Article;
