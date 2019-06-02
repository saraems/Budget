import React, { Component } from "react";
import "./Expenses.scss";
import { rawData } from "./sampleData/rawData";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

class AreaChar extends Component {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";

  render() {
    return (
      <AreaChart
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="rent"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="food"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="cleaningSupplies"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Area
          type="monotone"
          dataKey="phone"
          stackId="1"
          stroke="blue"
          fill="blue"
        />
        <Area
          type="monotone"
          dataKey="transport"
          stackId="1"
          stroke="red"
          fill="red"
        />
        <Area
          type="monotone"
          dataKey="education"
          stackId="1"
          stroke="yellow"
          fill="yellow"
        />
        <Area
          type="monotone"
          dataKey="traveling"
          stackId="1"
          stroke="violet"
          fill="violet"
        />
        <Area
          type="monotone"
          dataKey="travelingEquipment"
          stackId="1"
          stroke="white"
          fill="white"
        />
        <Area
          type="monotone"
          dataKey="restaurants"
          stackId="1"
          stroke="#ffc658"
          fill="orange"
        />
        <Area
          type="monotone"
          dataKey="beauty"
          stackId="1"
          stroke="#ffc658"
          fill="pink"
        />
        <Area
          type="monotone"
          dataKey="clothes"
          stackId="1"
          stroke="#ffc658"
          fill="gold"
        />
        <Area
          type="monotone"
          dataKey="entertainment"
          stackId="1"
          stroke="cadetblue"
          fill="cadetblue"
        />
        <Area
          type="monotone"
          dataKey="presents"
          stackId="1"
          stroke="gray"
          fill="gray"
        />
        <Area
          type="monotone"
          dataKey="electronics"
          stackId="1"
          stroke="green"
          fill="green"
        />
        <Area
          type="monotone"
          dataKey="fines"
          stackId="1"
          stroke="crimson"
          fill="crimson"
        />
        <Area
          type="monotone"
          dataKey="others"
          stackId="1"
          stroke="blue"
          fill="blue"
        />
      </AreaChart>
    );
  }
}

export default AreaChar;
