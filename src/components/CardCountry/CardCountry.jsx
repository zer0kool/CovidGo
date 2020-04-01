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
                        <div className="flag_country">
                            <img
                                src="https://coronastatistics.live/assets/flags/mx.svg"
                                alt=""
                            />
                        </div>
                        <div className="data_country">
                            <span className="name_country">{country}</span>
                            <div className="cases_data_country">
                                <span className="cases_country blue-text">
                                    {cases}
                                </span>
                                <span>&</span>
                                <span className="death_country red-text text-accent-2">
                                    {deaths}
                                </span>
                            </div>
                        </div>
                        <div className="today_data_country">
                            <span className="cases_country">{todayCases}</span>-
                            <span className="death_country">{todayDeaths}</span>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
