import React from "react";
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import { SensorDataSet } from "../../../types/sensor.data";

type BarChartProps = {
  width: number;
  dataSet: SensorDataSet[];
};

/**
 * Display the bar chart as a separate component
 */
const BarChart: React.FC<BarChartProps> = ({ width, dataSet }) => {
  return (
    <Chart width={width} data={dataSet} height={600}>
      <XAxis dataKey="hour" />
      <YAxis />
      <Legend />
      <Tooltip />
      <Bar type="monotone" dataKey="sensor1" fill="#82ca9d" />
      <Bar type="monotone" dataKey="sensor2" fill="#8884d8" />
      <Bar type="monotone" dataKey="sensor3" fill="#007fa3" />
      <Bar type="monotone" dataKey="sensor4" fill="#588089" />
    </Chart>
  );
};

BarChart.displayName = "BarChart";

export default BarChart;
