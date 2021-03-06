import React, { Component, Fragment } from "react";

//CSS
import "./CardCountry.css";
//ICON
import {AiFillPlusCircle} from 'react-icons/ai'
export default class CardCountry extends Component {

    formatNumber = (num) => {
        //return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        if (num === null) {return num = 0}
        return num.toLocaleString()

    }
    render() {
        const {
            country,
            cases,
            todayCases,
            deaths,
            todayDeaths
        } = this.props.country;

        return (
            <Fragment>
            <div className="CardCountry">
                <span className="iconContainer">
                    <AiFillPlusCircle className="icon_moreInfo blue-text" />
                </span>
                {
                    <div className="container_country">
                        
                        <div className="left">
                            <div className="flag_country">
                                <img decoding="async" loading="lazy" src={this.props.flagCode} alt={country} />
                            </div>
                            <div className="data_country">
                                <span className="name_country">{country}</span>
                                <div className="cases_data_country">
                                    <span className="white-text title">Total</span>
                                    <span className="cases_country blue-text data">
                                        {this.formatNumber(cases)} Cases
                                    </span>
                                    <span className="death_country red-text text-accent-2 data">
                                        {this.formatNumber(deaths)} Deaths
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="today_data_country">
                                <span className="white-text title">Today</span>
                                <span className="today_data_country_number cases_country blue-text data">
                                    <i className="tiny material-icons">{"group_add"}</i>
                                    <span>
                                        {this.formatNumber(todayCases)} Cases
                                    </span>
                                </span>
                                <span className="today_data_country_number death_country red-text  text-accent-2 data">
                                    <i className="tiny material-icons">{"group_add"}</i>
                                    <span>
                                        {this.formatNumber(todayDeaths)} Deaths
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </div>
            </Fragment>
        );
    }
}
