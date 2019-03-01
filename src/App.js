import React, { Component } from "react";
import Logo from "./components/logo";
import Generate from "./components/generate";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Logo />
        <Generate />
      </div>
    );
  }
}

export default App;
