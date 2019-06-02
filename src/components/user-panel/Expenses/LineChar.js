import React, { Component, PureComponent } from "react";
import "./Expenses.scss";
import { rawData } from "./sampleData/rawData";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend
} from "recharts";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={20}
          y={20}
          dy={5}
          textAnchor="end"
          fill="#666"
          // transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-10} fill={stroke} fontSize={7} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class LineChar extends Component {
  render() {
    return (
      <LineChart
        width={1100}
        height={400}
        data={rawData}
        margin={{
          top: 50,
          right: 50,
          left: 50,
          bottom: 50
        }}
      >
        <XAxis dataKey="month" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="2 2" />

        <Line
          type="monotone"
          dataKey="rent"
          stroke="blue"
          label={<CustomizedLabel />}
        />
        <Line
          type="monotone"
          dataKey="food"
          stroke="red"
          label={<CustomizedLabel />}
        />
        <Line
          type="monotone"
          dataKey="cleaningSupplies"
          stroke="green"
          label={<CustomizedLabel />}
        />
        <Line
          type="monotone"
          dataKey="transport"
          stroke="violet"
          label={<CustomizedLabel />}
        />
        <Line
          type="monotone"
          dataKey="traveling"
          stroke="crimson"
          label={<CustomizedLabel />}
        />
        <XAxis dataKey="name" />
      </LineChart>
    );
  }
}

export default LineChar;
