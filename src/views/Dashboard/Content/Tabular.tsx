import React from "react";
import { SensorDataSet } from "../../../types/sensor.data";
import { StyledTable } from "./style";

type TabularProps = {
  width: number;
  dataSet: SensorDataSet[];
};

/**
 * Tabular representation of data
 */
const Tabular: React.FC<TabularProps> = ({ width, dataSet }) => {
  return (
    <StyledTable>
      <tr>
        <th>Hour</th>
        <th>Sensor1</th>
        <th>Sensor1</th>
        <th>Sensor3</th>
        <th>Sensor4</th>
      </tr>
      {dataSet.map((datum: SensorDataSet) => (
        <tr>
          <td>{datum.hour}</td>
          <td>{datum.sensor1}</td>
          <td>{datum.sensor2}</td>
          <td>{datum.sensor3}</td>
          <td>{datum.sensor4}</td>
        </tr>
      ))}
    </StyledTable>
  );
};

Tabular.displayName = "Tabular";
export default Tabular;
