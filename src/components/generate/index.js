import React, { Component } from "react";
import GenerateButton from "../generateButton";
import "./style.css";
class generate extends Component {
  render() {
    return (
      <div className="generate-wraper">
        <div className="iner-wraper">
          <label className="row-label label-size" htmlFor="rows">
            Rows
          </label>
          <input
            className="main-inputs"
            type="number"
            defaultValue="10"
            max="20"
          />
          <div className="x-element">x</div>
          <label className="columns-label label-size" htmlFor="columns">
            Columns
          </label>
          <input
            className="main-inputs"
            type="number"
            defaultValue="10"
            max="20"
          />
          <div className="generateBtn-wraper">
            <GenerateButton />
          </div>
        </div>
      </div>
    );
  }
}

export default generate;
