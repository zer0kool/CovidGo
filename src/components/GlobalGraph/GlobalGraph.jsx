import React, { Component, Fragment } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

import "./GlobalGraph.css";

export default class GlobalGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalTimeline: {}
        };
    }
    async componentDidMount() {
        let globalStatsEndPoint =
            "https://api.coronastatistics.live/timeline/global";
        let globalStatsCall = await fetch(globalStatsEndPoint);
        if (globalStatsCall.ok) {
            try {
                var globalStatsResponse = await globalStatsCall.json();

                //needs to be modified
                //                function getYesterdaysDate() {
                //                    var date = new Date();
                //                    date.setDate(date.getDate()-1);
                //                    let yesturday = `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`;
                //                    return yesturday.toString();
                //                }
                //                let yesturdayStats = globalStatsResponse[getYesterdaysDate()]
                //                console.log(globalStatsResponse[getYesterdaysDate()]);

                this.setState({
                    globalTimeline: [].concat(
                        this.state.data,
                        globalStatsResponse
                    )
                });

                console.log(this.state.globalTimeline);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error(
                `HTTP_ERROR on ${globalStatsEndPoint}, Status: ${globalStatsCall.status}`
            );
        }

        // Themes begin
        am4core.useTheme(am4themes_dark);
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        let chart = am4core.create("globalGraph", am4charts.XYChart);

        var dates = [];

        Object.entries(globalStatsResponse).forEach(function([
            date,
            { cases }
        ]) {
            var x = `{"date":new Date(${date}), "value":${cases}}`;
            dates.push(x);
        });

        console.log(dates.toString());
        let mico = dates.toString();

        chart.data = [dates];
        console.log(chart.data);

        //        console.log(x)

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());

        // Create value axis
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        var lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.dataFields.valueY = "value";
        lineSeries.dataFields.dateX = "date";
        lineSeries.name = "Covid";
        lineSeries.strokeWidth = 3;
        lineSeries.strokeDasharray = "5,4";

        // Add simple bullet
        var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
        bullet.disabled = true;
        bullet.propertyFields.disabled = "disabled";

        var secondCircle = bullet.createChild(am4core.Circle);
        secondCircle.radius = 6;
        secondCircle.fill = chart.colors.getIndex(8);

        bullet.events.on("inited", function(event) {
            animateBullet(event.target.circle);
        });

        function animateBullet(bullet) {
            var animation = bullet.animate(
                [
                    { property: "scale", from: 1, to: 5 },
                    { property: "opacity", from: 1, to: 0 }
                ],
                1000,
                am4core.ease.circleOut
            );
            animation.events.on("animationended", function(event) {
                animateBullet(event.target.object);
            });
        }
    } //end Mount

    render() {
        return <div id="globalGraph" className="globalGraph"></div>;
    }
}
