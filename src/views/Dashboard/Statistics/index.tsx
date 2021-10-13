import React, { useContext } from "react";
import { SensorDataContext } from "../../../providers/sensordata.provider";
import { SensorStatisticsData } from "../../../types/sensor.data";
import { getStatistics } from "../../../utils/sensorData";
import StatisticsCard from "./StatisticCard";
import { StyledStatistics } from "./style";

/**
 * Statistics component that shows general data from the sensors
 */
const Statistics: React.FC = () => {
  /** Sensor data context */
  const { dataSet } = useContext(SensorDataContext);

  const statistics: SensorStatisticsData = getStatistics(dataSet);

  return (
    <StyledStatistics>
      <StatisticsCard
        value={statistics.maxValue}
        type={"Max"}
        device={statistics.maxValueDevice}
      />
      <StatisticsCard
        value={statistics.minValue}
        type={"Min"}
        device={statistics.minValueDevice}
      />
    </StyledStatistics>
  );
};

Statistics.displayName = "Statistics";

export default Statistics;
