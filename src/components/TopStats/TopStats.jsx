import React, { Component } from "react";

//CSS
import "./TopStats.css";

//components
import StatCard from "../StatCard/StatCard"

export default class TopStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
          globalTotal: {cases: 0, deaths: 0, recovered: 0},
          globalTimeline: [],
          yesturdayGlobal: {cases: 0, deaths: 0, recovered: 0}
        };
    }

    render() {
        const covid = this.state;

        let todayCases = covid.globalTotal.cases - covid.yesturdayGlobal.cases;
        let todayDeaths = covid.globalTotal.deaths - covid.yesturdayGlobal.deaths;
        let todayRecovered = covid.globalTotal.recovered - covid.yesturdayGlobal.recovered;

        return (
            <div className="top-container">
              <StatCard icon="mood_bad" label="Infected" totalStats={covid.globalTotal.cases.toLocaleString()} todayStats={`Today ${todayCases.toLocaleString()} new cases`} />
              <StatCard icon="sentiment_very_dissatisfied" label="Deaths" totalStats={covid.globalTotal.deaths.toLocaleString()} todayStats={`Today ${todayDeaths.toLocaleString()} have died`} />
              <StatCard icon="healing" label="Recovered" totalStats={covid.globalTotal.recovered.toLocaleString()} todayStats={`Today ${todayRecovered.toLocaleString()} recovered`} />
              <StatCard icon="airline_seat_flat" label="Critical" totalStats="NEED" icon2="group_add" todayStats={0} />
            </div>
        );
    }

    async componentDidMount() {
        let totalStatsEndPoint = "http://api.coronastatistics.live/all";
        let globalStatsEndPoint = "https://api.coronastatistics.live/timeline/global"

        let totalStatsCall = await fetch(totalStatsEndPoint);
        if (totalStatsCall.ok) {
            try{
                let totalStatsResponse = await totalStatsCall.json();
                this.setState({
                    globalTotal: totalStatsResponse
                });
            }catch(error){
                console.error(error);
            }
        } else {
            console.error(`HTTP_ERROR on ${totalStatsEndPoint}, Status: ${totalStatsCall.status}`);
        }


        let globalStatsCall = await fetch(globalStatsEndPoint);
        if (globalStatsCall.ok) {
            try{
                let globalStatsResponse = await globalStatsCall.json();

                function getYesterdaysDate() {
                    var date = new Date();
                    date.setDate(date.getDate()-1);
                    let yesturday = `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`;
                    return yesturday.toString();
                }
                let yesturdayStats = globalStatsResponse[getYesterdaysDate()]
                console.log(globalStatsResponse[getYesterdaysDate()]);

                this.setState({
                    globalTimeline: globalStatsResponse,
                    yesturdayGlobal: yesturdayStats
                });
                console.log(globalStatsResponse);
            }catch(error){
                console.error(error);
            }
        } else {
            console.error(`HTTP_ERROR on ${globalStatsEndPoint}, Status: ${globalStatsCall.status}`);
        }

    } // end of Mount

}
