import React, { Component } from "react";

//CSS
import "./TopStats.css";

//components
import StatCard from "../StatCard/StatCard"

export default class TopStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
          global: {cases: 0, deaths: 0, recovered: 0}
        };
    }

    render() {
        const covid = this.state;

        return (
            <div className="top-container">
              <StatCard label="Infected" totalStats={covid.global.cases.toLocaleString()} todayStats={0} />
              <StatCard label="Deaths" totalStats={covid.global.deaths.toLocaleString()} todayStats={0} />
              <StatCard label="Recovered" totalStats={covid.global.recovered.toLocaleString()} todayStats={0} />
              <StatCard label="Critical" totalStats="NEED" todayStats={0} />
            </div>
        );
    }

    async componentDidMount() {
        let url = "http://api.coronastatistics.live/all";

        let response = await fetch(url);
        if (response.ok) {
            try{
                let jsonData = await response.json();
                this.setState({
                    data: [].concat(this.state.data, jsonData),
                    global: jsonData
                });
                console.log(this.state.data);
            }catch(error){
                console.error(error);
            }
        } else {
            console.error("HTTP-Error: " + response.status);
        }
    }
}
