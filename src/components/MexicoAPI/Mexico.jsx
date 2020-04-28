import React, { Component } from "react";

import "./Mexico.css"

//  using proxy to bypass cors
const proxy = "https://cors-anywhere.herokuapp.com/";
const Endpoint = "https://covid19.sinave.gob.mx/Log.aspx/Grafica22";

export default class MXCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estadosMX:[],
            isLoading: false,
            error: null
        };
    }

    render() {
        const { estadosMX, isLoading, error } = this.state;

        if ( !estadosMX ){ return <p className="white-text"> No MexicoData...</p>;}
        if ( isLoading ){ var fetching = <p className="white-text"> Loading Mexico Data...</p>;}
        if ( error ){ return <p className="white-text"> {error.message} </p>;}

        return (
            <div className="modal-content">
                <h4>Estados Mexicanos</h4>
                <div className="MX">
                   {fetching}
                    <table className="highlight">
                        <thead className="sticky">
                            <tr>
                                <th>State</th>
                                <th>Cases</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                        {estadosMX.map(function(estado, index){
                            return (
                            <tr className="collection-item" key={index}>
                                <td>{estado.state}</td>
                                <td>{estado.activeCases}</td>
                                <td>{estado.deaths}</td>
                            </tr>
                          )
                      })}
                  </tbody>
                </table>
                </div>
            </div>
        );
    }

    componentDidMount = async() => {
        console.log("mexico feed")
        this.setState({ isLoading: true })
        let self = this
        let dataParsed = [];
        fetch(proxy+Endpoint, {method:'POST', headers:{"content-type": "application/json"}})
            .then(response => response.json())
            .then(function (rawJson){
                try {
                    var covid = rawJson;
                    var estados = JSON.parse(covid.d);
                    estados.forEach( scrape => {
                         var estado = {state: "", activeCases:"", negativos:"", pending:"", deaths:"" };
                            estado.state = scrape[1];
                            estado.activeCases = scrape[4];
                            estado.negativos = scrape[5];
                            estado.pending = scrape[6];
                            estado.deaths = scrape[7];
                            dataParsed.push(estado);
                    })

                }catch (error) {console.log(`Error inside the parsing function: ${error}`)}
            self.setState({estadosMX: dataParsed, isLoading: false })

        }).catch( error => this.setState({ error, isLoading: false }))
    }

}
