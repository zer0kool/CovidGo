import React, { Component } from "react";

//CSS
import "./StatCard.css";

export default class TopStats extends Component {
    render() {
        return (
            <div className="cardx">
                <div className="cardxContainer">
                    <span>
                        <i className="material-icons">{this.props.icon}</i>
                        {this.props.label}
                    </span>
                    <h3>{this.props.totalStats}</h3>
                    <p>
                        <i className="tiny material-icons">
                            {this.props.icon2}
                        </i>
                        {this.props.todayStats}
                    </p>
                </div>
            </div>
        );
    }
}
