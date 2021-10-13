import React, { useState, createContext } from "react";
import { AppDataContextState } from "../types/appdata.context.state";

/**
 * Type for default context state
 */
const contextDefault: AppDataContextState = {
  selectedMode: "barChart",
  setSelectedMode: (mode = "barChart") => {},
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

  /**
   * Method to add notification
   */
  const handleSetMode = (mode: "barChart" | "lineChart" | "tabular") => {
    setMode(mode);
  };

  return (
    <AppDataContext.Provider
      value={{ setSelectedMode: handleSetMode, selectedMode: mode }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataProvider;
