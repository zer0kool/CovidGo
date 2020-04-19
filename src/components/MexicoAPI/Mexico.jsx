import React, { Component } from "react";



export default class MXCall extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div className="Estados">

            </div>
        );
    }

    componentDidMount = async () =>{

         // using proxy to bypass cors
         const proxy = "https://cors-anywhere.herokuapp.com/";
         const url = "https://covid19.sinave.gob.mx/Log.aspx/Grafica22";

         // new request information
         var inforequest = new XMLHttpRequest();
         inforequest.open('POST', proxy+url, true);
         inforequest.setRequestHeader("content-type", "application/json")
         inforequest.onload = function () {

            var covid = JSON.parse(this.response);
            var estados = JSON.parse(covid.d);
            console.log(estados);

            var data = [];
            estados.forEach( estado => {
                var scraper = {state: "", activeCases:"", negativos:"", pending:"", deaths:"" };
                scraper.state = estado[1];
                scraper.activeCases = estado[4];
                scraper.negativos = estado[5];
                scraper.pending = estado[6];
                scraper.deaths = estado[7];
                console.log(scraper);
            data.push(scraper);
           })
         }

         inforequest.send();
    }

}
