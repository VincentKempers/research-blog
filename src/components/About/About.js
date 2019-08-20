import React, { Component } from "react";
// CSS
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>About me</h1>
        <div class="About__me">
          <div>
            <img class="About-me__picture" src="#" alt="picture of me" />
          </div>
          <p>
            I'm a junior front end developer who can't stop learning from The Netherlands.
            I fell in love with front-end development when I started my Bachelor at the University of Amsterdam.
          </p>
          <p>
            I created this website so i can keep track of my progress. But not only keep track of but implement my findings as well.
            Aswell as share the pages with people who want to learn about a topic I researched.
          </p>
          <p>
            Of course you would like to know why i wouldn't use a <a href="https://medium.com/@vincentkempers_" target="blank_">medium</a> for this.
            Or even GitHub. Well what's the fun in that...
            Plus I can use this created space to actually research things that isn't about development but could be an interesting topic (and I would want to customize the page).
          </p>
        </div>
      </div>
    );
  }
}

export default About;
