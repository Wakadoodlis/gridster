import React, { Component } from "react";

import "./style.css";

class square extends Component {
  render() {
    return (
      <div className={`square ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default square;
