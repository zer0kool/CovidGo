import React, { Component } from "react";

//cSS
import "./InputFilterByName.css";

export default class InputFilterByName extends Component {
    render() {
        return (
            <div className="inputFilterByName">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Seach Affected Country"
                    className="white-text"
                    onChange={(e) => this.props.filterCountries(e.target.value)}
                />
            </div>
        );
    }
}
