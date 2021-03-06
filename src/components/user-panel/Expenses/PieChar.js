import React, { Component } from "react";
import "./Expenses.scss";
import { rawData } from "./sampleData/rawData";
import { exampleData } from "./sampleData/exampleData";

import { Pie, PieChart, Cell } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "crimson",
  "green",
  "yellow",
  "pink",
  "gold",
  "red"
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class PieChar extends Component {
  render() {
    return (
      <PieChart width={600} height={600}>
        <Pie
          data={rawData}
          cx={300}
          cy={300}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200}
          fill="#8884d8"
          dataKey="totalExpenses"
        >
          {exampleData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

export default PieChar;
