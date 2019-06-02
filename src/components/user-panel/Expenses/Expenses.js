import React, { Component, Fragment } from "react";
import "./Expenses.scss";
import AreaChar from "./AreaChar";
import LineChar from "./LineChar";
import PieChar from "./PieChar";

/* am4chart code */

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class Expenses extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";

  render() {
    return (
      <Fragment>
        <div className="chart" />
        <AreaChar />
        <LineChar />
        <PieChar />
      </Fragment>
    );
  }
}

export default Expenses;
