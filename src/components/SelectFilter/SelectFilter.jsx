import React, { Component } from "react";
import Select from "react-select";

import "./SelectFilter.css";

export default class SelectFilter extends Component {
    state = {
        selectedOption: null
    };
    hola = () => {
        console.log("red");
    };
    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                asd
                <Select
                    value={selectedOption}
                    onChange={this.hola()}
                    options={[
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" }
                    ]}
                />
            </div>
        );
    }
}
