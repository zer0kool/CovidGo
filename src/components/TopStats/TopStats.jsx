import React, { Component } from "react";

//CSS
import "./TopStats.css";

export default class TopStats extends Component {
  render() {
    return (
        <div className="TopStats">
        <div className="card">Infectiopns</div>
        <div className="card">Deaths</div>
        <div className="card">Recoveries</div>
        <div className="card">Critical</div>
        </div>
    );
  }
}
