import React, { Component } from "react";
import About from "../components/About";
import Cars from "../components/Home";
import "../App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <hr/>
        <div>
          <About />
          <Cars />
        </div>
      </div>
    );
  }
}

export default App;
