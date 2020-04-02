import React, { Component } from "react";

//CSS
import "./SearchCountries.css";

//Components
import CardCountry from "../CardCountry/CardCountry";
import InputFilterByName from "../InputFilterByName/InputFilterByName";

export default class SearchCountries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: this.props.countries,
            allCountries: this.props.countries
        };
    }

    filterCountries = (stringTyped) => {
        let filter = stringTyped.toLowerCase();
        let countriesList = this.state.allCountries;
        let countriesFiltered = countriesList.filter(
            (countryElm) =>
                countryElm.country.toLowerCase().search(filter) !== -1
        );
        this.setState({
            countries: countriesFiltered
        });
    };

    render() {
        return (
            <div className="SearchCountries">
                <h4>Affected Countries</h4>
                <div className="filters">
                    <InputFilterByName
                        filterCountries={this.filterCountries.bind(this)}
                    />
                </div>
                {this.state.countries.length > 0 ? (
                    this.state.countries.map((country, index) => {
                        return <CardCountry country={country} key={index} />;
                    })
                ) : (
                    <div className="white-text m-left">Country Not Found.</div>
                )}
            </div>
        );
    }
}
