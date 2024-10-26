/** @format */

import React, { useEffect } from "react";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const ComposedChartWithAxisLabels = ({ chartData }) => {
  return (
    <div className="rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={chartData}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
          >
          {/* <CartesianGrid stroke="#8884d8" /> */}
          <XAxis
            dataKey="name"
            label={{ value: "Time", position: "insideBottomRight", offset: 0 }}
            scale="band"
          />
          <YAxis
            label={{ value: "Hits", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          {/* Use hits for the Area chart as well */}
          <Area type="monotone" dataKey="hits" fill="#8884d8" stroke="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComposedChartWithAxisLabels;
