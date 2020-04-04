import React, { Component } from "react";

//CSS
import "./Main.css";

import TopStats from "../TopStats/TopStats";

export default class Intro extends Component {
    render() {
        return (
            <div className="Main">
            <TopStats />
            </div>
        );
    }
}
