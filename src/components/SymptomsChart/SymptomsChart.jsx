import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_dark from "@amcharts/amcharts4/themes/dataviz";

import "./SymptomsChart.css";

export default class SymptomsChart extends Component {

  componentDidMount() {
        // Themes begin
//        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("symptoms", am4charts.XYChart);

        // Add percent sign to all numbers
        chart.numberFormatter.numberFormat = "#.#'%'";

        // Add data
        chart.data = [{
            "symptom": "Fever",
            "high": 83,
            "low": 99
        }, {
            "symptom": "Cough ",
            "high": 59,
            "low": 82
        }, {
            "symptom": "Fatigue",
            "high": 44,
            "low": 70
        }, {
            "symptom": "Lack of appetite",
            "high": 40,
            "low": 84
        }, {
            "symptom": "Shortness of breath",
            "high": 31,
            "low": 40
        }, {
            "symptom": "Mucus/phlegm",
            "high": 28,
            "low": 33
        }, {
            "symptom": "Body aches ",
            "high": 11,
            "low": 35
        }];

        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "symptom";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Common Symptoms";
        valueAxis.title.fontWeight = 800;

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "high";
        series.dataFields.categoryX = "symptom";
        series.clustered = false;
        series.tooltipText = "{categoryX} (covid19): [bold]{valueY}[/]";

        var series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "low";
        series2.dataFields.categoryX = "symptom";
        series2.clustered = false;
        series2.columns.template.width = am4core.percent(50);
        series2.tooltipText = "{categoryX} (covid19): [bold]{valueY}[/]";

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineX.disabled = true;
        chart.cursor.lineY.disabled = true;


    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return(
            <div className="symptomsChart">
                <div id="symptoms"></div>
            </div>
            )
    }
}
