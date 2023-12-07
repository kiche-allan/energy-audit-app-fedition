import React from 'react';
import {
  Legend,
  RadialBar,
  RadialBarChart,
  Tooltip
} from 'recharts';

const EnergyConsumption = ({ data }) => {
  return (
    <RadialBarChart
      width={750}
      height={500}
      innerRadius="50%"
      outerRadius="110%"
      data={data}
      startAngle={180}
      endAngle={0}
      barCategoryGap="20%"
      barSize={10}
      barGap="20%"
      // className="relative"
    >
      <RadialBar
        // label={{ fill: '#666', position: 'insideStart' }}
        background
        dataKey="uv"
      />
      {/* <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle" // bottom for mobile
        align="right"
      /> */}
      <Tooltip content={<CustomTooltip />} />
    </RadialBarChart>
  );
};

export default EnergyConsumption;

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    // Extract the data you want to display in the tooltip from payload
    const data = payload[0].payload;

    return (
      <div className="p-2 rounded-sm shadow-md bg-white">
        <p className="text-sm">{data.name}</p>
        <p className="text-sm text-gray-600">{data.pv}</p>
      </div>
    );
  }
  return null;
};
