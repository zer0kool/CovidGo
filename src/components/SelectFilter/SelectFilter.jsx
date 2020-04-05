import React, { Component } from "react";

import "./SelectFilter.css";

export default class SelectFilter extends Component {
    hola = () => {
        console.log("red");
    };
    render() {
        return (
            <div>
                <select className="browser-default" onChange={this.hola()}>
                    <option value="" disabled defaultValue>
                        Choose your option
                    </option>
                    <option value="1">Total Cases</option>
                    <option value="2">Total Deaths</option>
                </select>
            </div>
        );
    }
}
