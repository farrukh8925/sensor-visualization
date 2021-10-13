import React from "react";
import {
  LineChart as Chart,
  Line,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";

import { SensorDataSet } from "../../../types/sensor.data";

type LineChartProps = {
  width: number;
  dataSet: SensorDataSet[];
};

/**
 * Display the line chart as a separate component
 */
const LineChart: React.FC<LineChartProps> = ({ width, dataSet }) => {
  return (
    <Chart width={width} data={dataSet} height={600}>
      <XAxis dataKey="hour" />
      <YAxis />
      <Legend />
      <Tooltip />
      <Line type="monotone" dataKey="sensor1" stroke="#82ca9d" />
      <Line type="monotone" dataKey="sensor2" stroke="#8884d8" />
      <Line type="monotone" dataKey="sensor3" stroke="#007fa3" />
      <Line type="monotone" dataKey="sensor4" stroke="#588089" />
    </Chart>
  );
};

LineChart.displayName = "BarChart";

export default LineChart;
