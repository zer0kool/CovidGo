import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

import "./GlobalGraph.css";

export default class GlobalGraph extends Component {


    componentDidUpdate  = ()=>{
        if(this.props.data !== undefined){
            if(this.props.data.length ) {

                console.log("call TEst2")
                this.createGraph(this.props.data)
            }

        }
    }
    createGraph = (dataToGraph)=>{
            console.log(dataToGraph)
            // Themes begin
            am4core.useTheme(am4themes_dark);
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            let chart = am4core.create(this.props.idGraph, am4charts.XYChart);


            chart.data = dataToGraph;

            // Set input format for the dates
            chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

            // Create axes
            let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

            // Create series
            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "value";
            series.dataFields.dateX = "date";
            series.tooltipText = "{value}"

            // Drop-shaped tooltips
            series.tooltip.background.cornerRadius = 20;
            series.tooltip.background.strokeOpacity = 0;
            series.tooltip.pointerOrientation = "vertical";
            series.tooltip.label.minWidth = 40;
            series.tooltip.label.minHeight = 40;
            series.tooltip.label.textAlign = "middle";
            series.tooltip.label.textValign = "middle";

            // Make bullets grow on hover
            let bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.strokeWidth = 1;
            bullet.circle.radius = 3;
            bullet.circle.fill = am4core.color("#fff");

            let bullethover = bullet.states.create("hover");
            bullethover.properties.scale = 1.5;

            // Make a panning cursor
            chart.cursor = new am4charts.XYCursor();
            chart.cursor.xAxis = dateAxis;
            chart.cursor.snapToSeries = series;

    }



    render() {
        if(this.props.data !== undefined){
            if(this.props.data.length ){
                return <div id={`${this.props.idGraph}`} className={`${this.props.idGraph} globalGraph`}></div>
            }
            else{
                return <div className="sinDatos">SinDatos</div>
            }
        }
        else{
            return <div className="mapa">sin Datos</div>
        }
    }
}
