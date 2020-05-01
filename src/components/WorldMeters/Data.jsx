import React, { Component } from "react";


//  using proxy to bypass cors
const proxy = "https://cors-anywhere.herokuapp.com/";
const Endpoint = "https://www.worldometers.info/coronavirus/";

export default class WorldMeters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            worldometers: {},
            isLoading: false,
            error: null,
        };
    }

    render() {
        const { worldometers, isLoading, error } = this.state;


        if ( !worldometers ){ return <p className="white-text"> No Worldometers Data...</p>;}
        if ( isLoading ){ var fetching = <p className="white-text"> Loading Worldometers Data...</p>;}
        if ( error ){ return <p className="white-text"> {error.message} </p>;}


        return (
            <div className="worldometers">

            </div>
        );
    }

    componentDidMount(){
        this.setState({ isLoading: true })
        let self = this
        let dataParsed = {today:[], yesturday:[]};
        let parser = new DOMParser();
        fetch(proxy+Endpoint)
            .then(response => response.text())
            .then(function (html){
                try {
                    var htmlDom = parser.parseFromString(html, "text/html");
                    var todayTable = htmlDom.querySelectorAll("#main_table_countries_today tr");
                    var yesturdayTable = htmlDom.querySelectorAll("#main_table_countries_yesterday tr");

                    todayTable.forEach( scrape => {
                        let country = {country:"", totalCases:"", newCases:"", totalDeaths:"", newDeaths:"", activeCases:"", critical:"", totalTests:""};
                        country.country = scrape.cells[0].innerText;
                        country.totalCases = scrape.cells[1].innerText;
                        country.newCases = scrape.cells[2].innerText;
                        country.totalDeaths = scrape.cells[3].innerText;
                        country.newDeaths = scrape.cells[4].innerText;
                        country.activeCases = scrape.cells[6].innerText;
                        country.critical = scrape.cells[7].innerText;
                        country.totalTests = scrape.cells[10].innerText;

                        dataParsed.today.push(country);
                    })
                    yesturdayTable.forEach( scrape => {
                        let country = {country:"", totalCases:"", newCases:"", totalDeaths:"", newDeaths:"", activeCases:"", critical:"", totalTests:""};
                        country.country = scrape.cells[0].innerText;
                        country.totalCases = scrape.cells[1].innerText;
                        country.newCases = scrape.cells[2].innerText;
                        country.totalDeaths = scrape.cells[3].innerText;
                        country.newDeaths = scrape.cells[4].innerText;
                        country.activeCases = scrape.cells[6].innerText;
                        country.critical = scrape.cells[7].innerText;
                        country.totalTests = scrape.cells[10].innerText;

                        dataParsed.yesturday.push(country);
                    })

                }catch (error) {console.log(`Error inside the worldometers parsing function: ${error}`)}
            console.log(dataParsed);
            self.setState({worldometers: dataParsed, isLoading: false })
        }).catch( error => this.setState({ error, isLoading: false }))
    }

}
