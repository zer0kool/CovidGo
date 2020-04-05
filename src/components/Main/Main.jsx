import React, { Component } from "react";

//CSS
import "./Main.css";
//Components
import Loading from "../Loading/Loading";
import SearchCountries from "../SearchCountries/SearchCountries";
//import TopStats from "../TopStats/TopStats";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            affectedCountries: []
        };
    }

    render() {
        return (
            <div className="Main">
                {this.state.affectedCountries.length > 0 ? (
                    <div className="searchCountriesContainer">
                        <SearchCountries
                            countries={this.state.affectedCountries}
                        />
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
        let url = "http://api.coronastatistics.live/countries"; //URL
        let response = await fetch(url); //Obtengo los valores de la API

        if (response.ok) {
            //si obtuvo un 200
            let jsonData = await response.json(); //Formateo los datos a JSON
            this.setState({
                //Importante esto de aqui es exclusivo de  react -  Para cambiar los valores declarados en el STATE del componente
                data: [].concat(this.state.data, jsonData), //Como en el STATE esta variable la declaro como [] vacio, entonces le concateno la respuesta
                affectedCountries: [].concat(this.state.data, jsonData)
            });
            console.log(this.state.data);
        } else {
            alert("HTTP-Error: " + response.status); //Si hay algun error
        }
    }
}
