import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { data } from "./data";

const SimpleLineChart = () => {
  return (
    <>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {/* <Line
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        /> */}
        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
      </LineChart>
    </>
  );
};

export default SimpleLineChart;
