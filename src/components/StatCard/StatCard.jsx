import React, { Component } from "react";


import GlobalGraph from "../GlobalGraph/GlobalGraph"
//CSS
import "./StatCard.css";

export default class TopStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataGraph :(this.props.dataGraph)?this.props.dataGraph:[]
        };
    }
    render() {

        return (
            <div className="card activator">
                <div className="cardxContainer card-content">
                   <i className="material-icons tiny right activator grey-text lighten-5">info</i>
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
                        <br></br>
                        {this.props.today}
                    </p>
                </div>
                <div className="card-reveal">
                      <span className="card-title white-text text-darken-4">{this.props.label}<i className="material-icons right">close</i></span>
                        <div className="graph">
                            <GlobalGraph idGraph={this.props.idGraph} data= {this.props.dataGraph} />
                        </div>
                </div>
            </div>
        );
    }
}
