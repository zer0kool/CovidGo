import React, { Component, Fragment } from "react";

//CSS
import "./Main.css";
//Components
import Loading from "../Loading/Loading";
import SearchCountries from "../SearchCountries/SearchCountries";
//import GlobalChart from "../GlobalChart/GlobalChart";
import DistributionChart from "../DistributionChart/DistributionChart";
import TopStats from "../TopStats/TopStats";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            affectedCountries: [],
            totalCasesToday: 0,
            totalRemaining: 0,
            totalDeathsToday: 0,
            allInformation: {}
        };
    }

    render() {
        return (
            <div className="Main">
                {this.state.affectedCountries.length > 0 ? (
                    <Fragment>
                        <div className="topStatsCotainer">
                            <TopStats
                                allInformation={this.state.allInformation}
                                totalCasesToday={this.state.totalCasesToday}
                                totalDeathsToday={this.state.totalDeathsToday}
                                totalRemaining={this.state.totalRemaining}
                            />
                        </div>
                        <div className="searchCountriesContainer">
                            <SearchCountries
                                countries={this.state.affectedCountries}
                            />
                        </div>
                        <div className="distributionChartContainer">
                            {this.state.totalRemaining > 0 && (
                                <DistributionChart
                                    allInformation={this.state.allInformation}
                                    totalCasesToday={this.state.totalCasesToday}
                                    totalRemaining={this.state.totalRemaining}
                                />
                            )}
                        </div>
                    </Fragment>
                ) : (
                    <div>
                        <Loading />
                    </div>
                )}

               <a href="#" data-target="slide-out" className="right fixed-action-btn sidenav-trigger btn-large btn-floating waves-effect waves-light red"><i className="material-icons">menu</i></a>
            </div>
        );
    }

    getTotalCasesToday = () => {
        let totalCasesToday = 0;
        this.state.data.map((country) => {
            totalCasesToday += country.todayCases;
            return true;
        });
        return totalCasesToday;
    };

    getTotalDeathsToday = () => {
        let totalDeathsToday = 0;
        this.state.data.map((country) => {
            totalDeathsToday += country.todayDeaths;
            return true;
        });
        return totalDeathsToday;
    };

    getTotalRemaining = () => {
        const { cases, deaths, recovered } = this.state.allInformation;
        let remaining = 0;
        remaining = cases - recovered - deaths;
        return remaining;
    };

    getStatistics = () => {
        this.setState({
            totalCasesToday: this.getTotalCasesToday(),
            totalDeathsToday: this.getTotalDeathsToday(),
            totalRemaining: this.getTotalRemaining()
        });
    };
    async componentDidMount() {
        try {
            let urlAll = "http://api.coronastatistics.live/all";
            let urlCountries = "http://api.coronastatistics.live/countries"; //URL

            let responseAll = await fetch(urlAll); //Obtengo los valores de la API
            let responseCountries = await fetch(urlCountries); //Obtengo los valores de la API
            let jsonDataAll = await responseAll.json(); //Formateo los datos a JSON
            let jsonDataCountries = await responseCountries.json(); //Formateo los datos a JSON

            await this.setState({
                //Importante esto de aqui es exclusivo de  react -  Para cambiar los valores declarados en el STATE del componente
                data: [].concat(this.state.data, jsonDataCountries), //Como en el STATE esta variable la declaro como [] vacio, entonces le concateno la respuesta
                affectedCountries: [].concat(
                    this.state.data,
                    jsonDataCountries
                ),
                allInformation: jsonDataAll
            });
            //Set all important data to the Componentes in Main
            this.getStatistics();
        } catch (error) {
            console.log("HTTP-Error: " + error); //Si hay algun error
        }
    }
}
