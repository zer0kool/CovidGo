import React, { Component } from "react";

//CSS
import "./CardCountry.css";

export default class CardCountry extends Component {
    render() {
        const {
            country,
            cases,
            todayCases,
            deaths,
            todayDeaths
        } = this.props.country;

        return (
            <div className="CardCountry">
                {
                    <div className="container_country">
                        <div className="left">
                            <div className="flag_country">
                                <img src={this.props.flagCode} alt={country} />
                            </div>
                            <div className="data_country">
                                <span className="name_country">{country}</span>
                                <div className="cases_data_country">
                                    <span className="cases_country blue-text">
                                        {cases} Cases
                                    </span>
                                    <span>&</span>
                                    <span className="death_country red-text text-accent-2">
                                        {deaths} Deaths
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="today_data_country">
                                <span className="cases_country blue-text">
                                    + {todayCases} Cases
                                </span>
                                <span className="death_country red-text  text-accent-2">
                                    + {todayDeaths} Deaths
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
