import React, { Component } from "react";


//  using proxy to bypass cors
const proxy = "https://cors-anywhere.herokuapp.com/";
const Endpoint = "https://covid19.sinave.gob.mx/Log.aspx/Grafica22";

export default class USA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estadosUS:[],
            isLoading: false,
            error: null
        };
    }


    render() {
        const { estadosUS, isLoading, error } = this.state;

        if ( !estadosUS ){ return <p className="white-text"> No USA Data...</p>;}
        if ( isLoading ){ var fetching = <p className="white-text"> Loading USA Data...</p>;}
        if ( error ){ return <p className="white-text"> {error.message} </p>;}


        return (
            <div className="modal-content">
                <h4>United States of America</h4>
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
                        {estadosUS.map(function(estado, index){
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
        console.log("USA feed")
        this.setState({ isLoading: true })
        let self = this
        let dataParsed = [];
        let parser = new DOMParser();
        fetch(proxy+Endpoint, {method:'POST', headers:{"content-type": "application/json"}})
            .then(response => response.json())
            .then(function (html){
                try {
                    var htmlDom = parser.parseFromString(html, "text/html");
                    var estados = htmlDom.querySelectorAll("#covid19-container tr");

                    estados.forEach( scrape => {
                         var estado = {state: "", activeCases:"", deaths:"" };
                            estado.state = scrape[1];
                            estado.activeCases = scrape[4];
                            estado.deaths = scrape[7];
                            dataParsed.push(estado);
                    })

                }catch (error) {console.log(`Error inside the parsing function: ${error}`)}
            self.setState({estadosUS: dataParsed, isLoading: false })

        }).catch( error => this.setState({ error, isLoading: false }))
    }

}

