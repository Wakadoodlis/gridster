import React, { Component } from "react";
import "./style.css";
import hero from "./img/Gridster-Logo.png";
class logo extends Component {
  render() {
    return (
      <div className="logo-wraper">
        <img className="hero" src={hero} alt="Gridster logo" />
      </div>
    );
  }
}

export default logo;
