import React, { Component } from "react";

//CSS
import "./TopStats.css";

//components
import StatCard from "../StatCard/StatCard";
// import GlobalGraph from "../GlobalGraph/GlobalGraph";

export default class TopStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalTotal: { cases: 0, deaths: 0, recovered: 0 },
            globalTimeline: [],
            yesturdayGlobal: { cases: 0, deaths: 0, recovered: 0 }
        };
    }

    render() {
        const { cases, deaths, recovered } = this.props.allInformation;

        return (
            <div className="top-container">
                <StatCard
                    icon="mood_bad"
                    label="Infected"
                    totalStats={cases.toLocaleString()}
                    todayStats={`Today ${this.props.totalCasesToday.toLocaleString()} new cases`}
                />
                <StatCard
                    icon="sentiment_very_dissatisfied"
                    label="Deaths"
                    totalStats={deaths.toLocaleString()}
                    todayStats={`Today ${this.props.totalDeathsToday.toLocaleString()} have died`}
                />
                <StatCard
                    icon="healing"
                    label="Recovered"
                    totalStats={recovered.toLocaleString()}
                    todayStats={`Today ${this.props.totalRemaining.toLocaleString()} recovered`}
                />
                <StatCard
                    icon="airline_seat_flat"
                    label="Critical"
                    totalStats="NEED"
                    icon2="group_add"
                    todayStats={0}
                />
            </div>
        );
    }
}
