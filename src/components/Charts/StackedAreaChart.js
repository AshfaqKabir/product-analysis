import React from "react";
import { data } from "./data";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const StackedAreaChart = () => {
  return (
    <>
      <AreaChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fill="#000000"
        />
      </AreaChart>
    </>
  );
};

export default StackedAreaChart;
