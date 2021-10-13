import React, { useState, createContext } from "react";
import { AppDataContextState } from "../types/appdata.context.state";

/**
 * Type for default context state
 */
const contextDefault: AppDataContextState = {
  selectedMode: "barChart",
  setSelectedMode: (mode = "barChart") => {},
  selectedDate: new Date(),
  setSelectedDate: (date = new Date()) => {},
};

/**
 * Create context and return it
 */
export const AppDataContext = createContext(contextDefault);

/**
 * Create the provider
 */
const AppDataProvider: React.FC = ({ children }) => {
  /**
   * State Management
   */
  const [mode, setMode] = useState<"barChart" | "lineChart" | "tabular">(
    "barChart"
  );

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  /**
   * Method to add notification
   */
  const handleSetMode = (mode: "barChart" | "lineChart" | "tabular") => {
    setMode(mode);
  };

  /**
   * Method to change selected date
   */
  const handleSetSelectedDate = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <AppDataContext.Provider
      value={{
        setSelectedMode: handleSetMode,
        selectedMode: mode,
        selectedDate,
        setSelectedDate: handleSetSelectedDate,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataProvider;
