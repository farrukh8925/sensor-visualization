import React, { useState, createContext } from "react";
import { SensorContextState, SensorDataSet } from "../types/sensor.data";
import { formDataSet } from "../utils/sensorData";

/** Default AppDataContextState */
const contextDefault: SensorContextState = {
  addDataSet: (dataSet: SensorDataSet[]) => {},
  addData: (data: SensorDataSet) => {},
  dataSet: [],
};

/**
 * Create the context
 */
export const SensorDataContext = createContext(contextDefault);

/**
 * Create the provider
 */
const SensorDataProvider: React.FC = ({ children }) => {
  const [dataSet, setDataSet] = useState<SensorDataSet[]>([]);

  /** Method to add history to current data set */
  const addDataSet = (dataSet: SensorDataSet[]) => {
    const hourlyDataSet = dataSet.map((datum: SensorDataSet) => ({
      hour: new Date(datum.date).getHours(),
      ...datum,
    }));
    setDataSet(formDataSet(hourlyDataSet));
  };

  /** Method to push a single data value to array set */
  const addData = (data: SensorDataSet) => {
    setDataSet([...dataSet, data]);
  };

  return (
    <SensorDataContext.Provider
      value={{
        addData,
        addDataSet,
        dataSet,
      }}
    >
      {children}
    </SensorDataContext.Provider>
  );
};

SensorDataProvider.displayName = "AppDataProvider";

export default SensorDataProvider;
