import React, { Component } from "react";


//CSS


export default class TopStats extends Component {

    render() {
        return (
            <div className="cardx">
                <span>{this.props.label}</span>
                <h3>{this.props.totalStats}</h3>
                <p>{this.props.todayStats}</p>
            </div>
        );
    }
}
