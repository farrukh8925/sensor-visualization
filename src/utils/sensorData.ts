import { SensorDataSet } from "../types/sensor.data";

/**
 * Normalize chart data for the hours in a day
 * We know that the information is updated every hour
 * So, data representation will be hourly
 */
export const formDataSet = (sensorData: SensorDataSet[]): SensorDataSet[] => {
  const hours: number[] = Array.from({ length: 24 }, (_, i) => i);

  const dataSet: any = hours.map((hour: number) => {
    if (sensorData.find((sensorDatum) => sensorDatum.hour === hour)) {
      return sensorData.find((sensorDatum) => sensorDatum.hour === hour);
    }
    return {
      hour,
      sensor1: 0,
      sensor2: 0,
      sensor3: 0,
      sensor4: 0,
    };
  });

  return dataSet as SensorDataSet[];
};
