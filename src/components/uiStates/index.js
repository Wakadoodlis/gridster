import React from "react";
import GenerateButton from "../generateButton";
import Squarediv from "../square";
import "./style.css";

function uiStates() {
  return (
    <React.Fragment>
      <h5 className="ui-header">UI States</h5>
      <div className="uiStates-wraper">
        <div className="default-div">Default</div>
        <GenerateButton className="none" />
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
        <div className="square-wraper2">
          <Squarediv />
          <Squarediv className="square-hover" />
          <Squarediv className="square-down" />
          <Squarediv className="square-clear" />
        </div>
      </div>
      <div className="grid-wraper">
        <div className="square-div-start">Start point</div>
        <div className="square-div-end">End point</div>
        <div className="square-div-shortp">Shortest path</div>
        <div className="square-wraper2 margin2">
          <Squarediv className="square-start" />
          <Squarediv className="square-end" />
          <Squarediv className="square-shortp" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default uiStates;
