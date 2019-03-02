import React, { Component } from "react";
import Logo from "./components/logo";
import Generate from "./components/generate";
import Squares from "./components/squares";
import UiStates from "./components/uiStates";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Logo />
        <Generate />
        <Squares />
        <UiStates />
      </div>
    );
  }
}

export default App;
