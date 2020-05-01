import React, { Component } from "react";

//CSS
import "./TopStats.css";

//components
import StatCard from "../StatCard/StatCard";
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
            yesturdayGlobal: { cases: 0, deaths: 0, recovered: 0 }
        };
    }

    render() {
        const { cases, deaths, recovered } = this.props.allInformation;


        return (
            <div className="top-container">
                <StatCard
                    icon="sentiment_very_dissatisfied"
                    label="Infected"
                    totalStats={cases.toLocaleString()}
                    icon2="group_add"
                    todayStats={this.props.totalCasesToday.toLocaleString()}
                    today="New cases today."
                    dataGraph={this.state.dataCasesGraph}
                    idGraph={"infectedGraph"}

                />
                <StatCard
                    icon="airline_seat_flat"
                    label="Deaths"
                    totalStats={deaths.toLocaleString()}
                    icon2="group_add"
                    todayStats={this.props.totalDeathsToday.toLocaleString()}
                    today="Have died today."
                    dataGraph={this.state.dataDeathsGraph}
                    idGraph={"deathsGraph"}
                />
                <StatCard
                    icon="healing"
                    label="Recovered"
                    totalStats={recovered.toLocaleString()}
                    icon2="group_add"
                    todayStats={this.props.totalRemaining.toLocaleString()}
                    today="Remaining to heal"
                    dataGraph={this.state.dataRecoveredGraph}
                    idGraph={"recoveredGraph"}
                />
                <StatCard
                    icon="track_changes"
                    label="Examined"
                    totalStats="..."
                    icon2="group_add"
                    todayStats={0}
                    today="Examin today."
                />
            </div>
        );
    }

    componentDidMount = async () =>{
        let globalStatsCall = await fetch(globalStatsEndPoint);
        if (globalStatsCall.ok) {
            try {
                var globalStatsResponse = await globalStatsCall.json();
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error(
                `HTTP_ERROR on ${globalStatsEndPoint}, Status: ${globalStatsCall.status}`
            );
        }

        let casesArray=[];
        let deathsArray=[];
        let recoveredArray = [];

        Object.entries(globalStatsResponse).forEach(function([
            date,
            { cases,deaths,recovered }
        ]) {

            const getCases = { date:date , value:cases }
            const getDeaths = { date:date , value:deaths }
            const getRecovered = { date:date , value:recovered }

            const newCase = Object.create(getCases)
            const newDeath = Object.create(getDeaths)
            const newRecovery = Object.create(getRecovered)

            casesArray.push(newCase);
            deathsArray.push(newDeath);
            recoveredArray.push(newRecovery);

        });
        this.setState({
            dataCasesGraph:casesArray,
            dataDeathsGraph:deathsArray,
            dataRecoveredGraph:recoveredArray
        })

    }
}
