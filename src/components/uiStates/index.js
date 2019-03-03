import React from "react";
import GenerateButton from "../generateButton";
import "./style.css";

function uiStates() {
  return (
    <React.Fragment>
      <h5 className="ui-header">UI States</h5>
      <div className="uiStates-wraper">
        <div className="default-div">Default</div>
        <GenerateButton />
        <div className="hover-div">Hover</div>
        <button className="hover-btn"> Generate</button>
        <div className="down-div">Down</div>
        <button className="down-btn"> Generate</button>
      </div>
      <div className="grid-wraper">
        <div className="square-div-default">Default</div>
        <div className="square-div-hover">Hover</div>
        <div className="square-div-Down">Down</div>
        <div className="square-div-Clear">Clear</div>
        <div className="grids">
          <div className="square" />
          <div className="square" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default uiStates;
