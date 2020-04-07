import React, { Component, Fragment } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/material";

import "./DistributionChart.css";

export default class DistributionChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:
                100 -
                (this.props.totalCasesToday * 100) /
                    this.props.allInformation.cases,
            recovered:
                (100 *
                    (this.props.totalCasesToday + this.props.totalRemaining)) /
                this.props.allInformation.cases,
            death: 0
        };
    }
    componentDidMount() {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        let chart = am4core.create("chartdiv", am4charts.RadarChart);

        // Add data
        chart.data = [
            {
                category: "Critical - PENDING",
                value: 0,
                full: 100
            },
            {
                category: "Death",
                value: 100 - this.state.recovered,
                full: 100
            },
            {
                category: "Recovered",
                value: this.state.recovered,
                full: 100
            },
            {
                category: "Active",
                value: this.state.active,
                full: 100
            }
        ];

        // Make chart not full circle
        chart.startAngle = -90;
        chart.endAngle = 180;
        chart.innerRadius = am4core.percent(20);

        // Set number format
        chart.numberFormatter.numberFormat = "#.#'%'";

        // Create axes
        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.fontWeight = 500;
        categoryAxis.renderer.labels.template.adapter.add("fill", function(
            fill,
            target
        ) {
            return target.dataItem.index >= 0
                ? chart.colors.getIndex(target.dataItem.index)
                : fill;
        });
        categoryAxis.renderer.minGridDistance = 10;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;

        // Create series
        let series1 = chart.series.push(new am4charts.RadarColumnSeries());
        series1.dataFields.valueX = "full";
        series1.dataFields.categoryY = "category";
        series1.clustered = false;
        series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
            "alternativeBackground"
        );
        series1.columns.template.fillOpacity = 0.08;
        series1.columns.template.cornerRadiusTopLeft = 20;
        series1.columns.template.strokeWidth = 0;
        series1.columns.template.radarColumn.cornerRadius = 20;

        let series2 = chart.series.push(new am4charts.RadarColumnSeries());
        series2.dataFields.valueX = "value";
        series2.dataFields.categoryY = "category";
        series2.clustered = false;
        series2.columns.template.strokeWidth = 0;
        series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
        series2.columns.template.radarColumn.cornerRadius = 20;

        series2.columns.template.adapter.add("fill", function(fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        // Add cursor
        // chart.cursor = new am4charts.RadarCursor();

        this.chart = chart;
    }
    componentDidUpdate() {}
    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div className="main">
                <div id="chartdiv" className="DistributionChart"></div>
            </div>
        );
    }
}
