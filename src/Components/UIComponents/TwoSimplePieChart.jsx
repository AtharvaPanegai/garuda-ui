/** @format */

import React, { useEffect } from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"; // Correct recharts Tooltip import
import PieChartData from "../../sample/pieChat.sampleData.json";

const TwoSimplePieChart = () => {
  return (
    <div className="w-full h-96"> 
      <ResponsiveContainer width="100%" height="100%"> 
        <PieChart>
          <Pie
            dataKey="count"     
            nameKey="statusCode"  
            isAnimationActive={true}
            data={PieChartData.graphData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip  />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TwoSimplePieChart;
