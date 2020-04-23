import React, { Component } from "react";

import "./Mexico.css"

export default class MXCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estadosMX:[]
        };
    }

    render() {
        return (
            <div className="Estados">
             <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
              <div id="modal1" className="modal bottom-sheet blue-grey darken-4">
                <div className="modal-content">
                  <h4>Estados Mexicanos</h4>
                  <div className="MX">
                    <table className="highlight">
                        <thead className="sticky">
                            <tr>
                                <th>State</th>
                                <th>Cases</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                          {this.state.estadosMX.map(function(estado, index){
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
                <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">close</a>
                </div>
              </div>
            </div>
        );
    }

    componentDidMount = async () =>{

         // using proxy to bypass cors
         const proxy = "https://cors-anywhere.herokuapp.com/";
         const url = "https://covid19.sinave.gob.mx/Log.aspx/Grafica22";
         var data = [];

         // new request information
         var inforequest = new XMLHttpRequest();
         inforequest.open('POST', proxy+url, true);
         inforequest.setRequestHeader("content-type", "application/json");
         inforequest.onload = function () {

            var covid = JSON.parse(this.response);
            var estados = JSON.parse(covid.d);
             //console.log(estados);

//            var data = [];
             console.log(data);
            estados.forEach( estado => {
                var scraper = {state: "", activeCases:"", negativos:"", pending:"", deaths:"" };
                scraper.state = estado[1];
                scraper.activeCases = estado[4];
                scraper.negativos = estado[5];
                scraper.pending = estado[6];
                scraper.deaths = estado[7];
                //console.log(scraper);
            data.push(scraper);
           })

            return data;
         }

         inforequest.send();
         this.setState({
            estadosMX:data
         })
    }

}
