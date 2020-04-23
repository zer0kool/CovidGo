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
             <a className="waves-effect waves-light btn modal-trigger" href="#modalMX">Mexico by State</a>
              <div id="modalMX" className="modal bottom-sheet blue-grey darken-4">
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
              </div>
            </div>
        );
    }

    fetchData = (url_api) =>{
        return new Promise( (resolve, reject) =>{
            let xHttp = new XMLHttpRequest();
        
            xHttp.open('POST', url_api, true ) //El true es para decir que se ejecute de forma asincrona
            xHttp.setRequestHeader("content-type", "application/json");
            xHttp.onreadystatechange = ( () =>{
    
                if(xHttp.readyState === 4){ 
                    //El 4 es para hacer referencia a los estados de la peticion, en este caso "Request finished, Response is ready"
    
                    (xHttp.status === 200)
                        ? resolve( JSON.parse(xHttp.responseText) ) 
                        : reject( new Error('Error Peticion Data', url_api) )  
                }
            })
    
            xHttp.send();
        })
        
    }
    
    
    componentDidMount = async () =>{
    
        //  using proxy to bypass cors
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "https://covid19.sinave.gob.mx/Log.aspx/Grafica22";
        try {
            const data = await this.fetchData(proxy+url);
            
            var covid = data;
            var estados = JSON.parse(covid.d);
            var datos = [];
            estados.forEach( estado => {
                var scraper = {state: "", activeCases:"", negativos:"", pending:"", deaths:"" };
                scraper.state = estado[1];
                scraper.activeCases = estado[4];
                scraper.negativos = estado[5];
                scraper.pending = estado[6];
                scraper.deaths = estado[7];            
                datos.push(scraper);
            })
            this.setState({
                estadosMX:datos
            })
        } catch (error) {
            console.log("Error MEXICO COMP: ",error)
        }
    }

}
