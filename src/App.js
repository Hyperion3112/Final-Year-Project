import React, { Component } from "react";
import Signin from "./signin";
//import Navigation from "./navigation";
import "./App.css";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Signin />
      </div>
    );
  }
}

export default App;
