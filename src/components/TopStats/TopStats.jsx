import React, { Component } from "react";

//CSS
import "./TopStats.css";
import M from "materialize-css";

//components
import StatCard from "../StatCard/StatCard";
//import Data from "../WolrdMeters/Data";
// import GlobalGraph from "../GlobalGraph/GlobalGraph";

let globalStatsEndPoint = "https://api.coronastatistics.live/timeline/global";
export default class TopStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalTotal: { cases: 0, deaths: 0, recovered: 0 },
            dataCasesGraph:[],
            dataDeathsGraph:[],
            dataRecoveredGraph:[],
            yesturdayGlobal: { cases: 0, deaths: 0, recovered: 0 },
            error: null,
            isLoading: false
        };
    }

    render() {
        const { cases, deaths, recovered } = this.props.allInformation;
        const { isLoading, error } = this.state;

        if ( isLoading ){var fetching = console.log("loading StatCards")}
        if ( error ){ return <p className="white-text"> {error.message} StatCard</p>;}

        return (
            <div className="top-container">
                <StatCard
                    icon="sentiment_very_dissatisfied"
                    label="Infected"
                    totalStats={cases.toLocaleString()}
                    icon2="group_add"
                    todayStats={this.props.totalCasesToday.toLocaleString()}
                    today="new cases today"
                    dataGraph={this.state.dataCasesGraph}
                    idGraph={"infectedGraph"}

                />
                <StatCard
                    icon="airline_seat_flat"
                    label="Deaths"
                    totalStats={deaths.toLocaleString()}
                    icon2="group_add"
                    todayStats={this.props.totalDeathsToday.toLocaleString()}
                    today="have died today"
                    dataGraph={this.state.dataDeathsGraph}
                    idGraph={"deathsGraph"}
                />
                <StatCard
                    icon="healing"
                    label="Recovered"
                    totalStats={recovered.toLocaleString()}
                    icon2="group_add"
                    todayStats={this.props.totalRemaining.toLocaleString()}
                    today="remaining to heal"
                    dataGraph={this.state.dataRecoveredGraph}
                    idGraph={"recoveredGraph"}
                />
                <StatCard
                    icon="track_changes"
                    label="Examined"
                    totalStats="..."
                    icon2="group_add"
                    todayStats={0}
                    today="examined today"
                />
            </div>
        );
    }

    componentDidMount = async () =>{
        this.setState({ isLoading: true })
        let self = this
        let casesArray=[];
        let deathsArray=[];
        let recoveredArray = [];
        fetch(globalStatsEndPoint)
            .then( response => response.json() )
            .then( function (rawJson) { try{
                Object.entries(rawJson).forEach(function([
                    date,
                    { cases,deaths,recovered }
                ]) {
                    const getCases = { date:date , value:cases }
                    const getDeaths = { date:date , value:deaths }
                    const getRecovered = { date:date , value:recovered }

                    casesArray.push(getCases);
                    deathsArray.push(getDeaths);
                    recoveredArray.push(getRecovered);
                })
                } catch (error) {console.log(`Error inside the parsing function: ${error}`)}
            self.setState({
                dataCasesGraph:casesArray,
                dataDeathsGraph:deathsArray,
                dataRecoveredGraph:recoveredArray,
                isLoading: false
            })

        }).catch( error => this.setState({ error, isLoading: false }))
    }
}
