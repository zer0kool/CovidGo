import React, { Component } from "react";

//CSS
import "./SearchCountries.css";

//Components
import CardCountry from "../CardCountry/CardCountry";

export default class SearchCountries extends Component {
    render() {
        return (
            <div className="SearchCountries blue-grey darken-2">
                <h3>Affected Countries</h3>
                {this.props.countries.map((country, index) => {
                    return <CardCountry country={country} key={index} />;
                })}
            </div>
        );
    }
}
