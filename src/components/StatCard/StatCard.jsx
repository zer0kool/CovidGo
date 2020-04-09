import React, { Component } from "react";

//CSS
import "./StatCard.css";

export default class TopStats extends Component {
    render() {
        return (
            <div className="card activator">
                <div className="cardxContainer card-content">
                    <span className="activator">
                        <i className="material-icons">{this.props.icon}</i>
                        {this.props.label}
                    </span>
                    <h3 className="activator">{this.props.totalStats}</h3>
                    <p className="activator">
                        <i className="tiny material-icons">
                            {this.props.icon2}
                        </i>
                        {this.props.todayStats}
                    </p>
                </div>
                <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">{this.props.label}<i className="material-icons right">close</i></span>
                      <p>GRAPH DATA HERE</p>
                </div>
            </div>
        );
    }
}
