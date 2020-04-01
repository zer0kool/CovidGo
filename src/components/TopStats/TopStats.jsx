import React, { Component } from "react";

//CSS
import "./TopStats.css";

export default class TopStats extends Component {
  render() {
    return (
        <div className="top-container">
            <div className="cardx">
                <span>Infections</span>
                <h3>858,920</h3>
                <p>1688 Today</p>
            </div>
            <div className="cardx">
                <span>Deaths</span>
                <h3>42,322</h3>
                <p>42 Today</p>
            </div>
            <div className="cardx">
                <span>Recoveries</span>
                <h3>178.100</h3>
                <p>639.398 remaining</p>
            </div>
            <div className="cardx">
                <span>Critical</span>
                <h3>32,898</h3>
                <p>67,177.4 per million</p>
            </div>
        </div>
    );
  }
}
