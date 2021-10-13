/**
 * Type definition for application data state
 */

export type AppDataContextState = {
  selectedMode: "barChart" | "lineChart" | "tabular";
  setSelectedMode: (mode: "barChart" | "lineChart" | "tabular") => void;
  selectedDate: Date;
  setSelectedDate: (newDate: Date) => void;
};
