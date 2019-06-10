// import "core-js/shim";

import React, { Component, Fragment } from "react";
import "./Expenses.scss";
import AreaChar from "./AreaChar";
import LineChar from "./LineChar";
import PieChar from "./PieChar";

/* am4chart code */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const data = [
  {
    country: "Lithuania",
    litres: 501.9
  },
  {
    country: "Czech Republic",
    litres: 301.9
  },
  {
    country: "Ireland",
    litres: 201.1
  },
  {
    country: "Germany",
    litres: 165.8
  },
  {
    country: "Australia",
    litres: 139.9
  },
  {
    country: "Austria",
    litres: 128.3
  },
  {
    country: "UK",
    litres: 99
  },
  {
    country: "Belgium",
    litres: 60
  },
  {
    country: "The Netherlands",
    litres: 50
  }
];

class Expenses extends Component {
  componentDidMount = () => {
    let chart = am4core.create("chart", am4charts.XYChart);

    // let chart = am4core.create("chart", am4charts.PieChart);
    // chart.innerRadius = am4core.percent(40);

    // Add data
    chart.data = data;

    // LEGEND PIE CHART
    // chart.legend = new am4charts.Legend();
    // let series = chart.series.push(new am4charts.PieSeries());
    // series.dataFields.value = "litres";
    // series.dataFields.category = "country";
    // STYLED PIE CHART
    // series.slices.template.stroke = am4core.color("#4a2abb");
    // series.slices.template.strokeOpacity = 1;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Countries";

    valueAxis.title.text = "Litres sold (M)";

    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    // series.dataFields.valueY = "litres";
    // series.dataFields.categoryX = "country";
  };
  render() {
    return (
      <Fragment>
        <div id="chart" />
        <AreaChar />
        <LineChar />
        <PieChar />
      </Fragment>
    );
  }
}

export default Expenses;
