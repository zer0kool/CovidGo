import React, { Component } from "react";

//CSS
import "./Main.css";

//Components
import Loading from "../Loading/Loading";
import SearchCountries from "../SearchCountries/SearchCountries";

export default class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <div className="Main">
                {this.state.data.length > 0 ? (
                    <div className="searchCountriesContainer">
                        <SearchCountries countries={this.state.data} />
                    </div>
                ) : (
                    <div>
                        <Loading />
                    </div>
                )}
            </div>
        );
    }

    async componentDidMount() {
        let url = "http://api.coronastatistics.live/countries";
        let response = await fetch(url);

        if (response.ok) {
            let jsonData = await response.json();
            this.setState({
                data: [].concat(this.state.data, jsonData)
            });
            console.log(this.state.data);
        } else {
            alert("HTTP-Error: " + response.status);
        }
    }
}
