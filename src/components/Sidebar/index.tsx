import React, { useContext } from "react";
import {
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlineTable,
} from "react-icons/ai";
import { AppDataContext } from "../../providers/appdata.provider";

import { StyledSidebar } from "./style";

/**
 * Sidebar component
 */
const Sidebar: React.FC = () => {
  /** App data context hook */
  const { selectedMode, setSelectedMode } = useContext(AppDataContext);

  /** Handle selecting of mode */
  const handleSelectMode = (mode: "barChart" | "lineChart" | "tabular") => {
    setSelectedMode(mode);
  };

  return (
    <StyledSidebar>
      <button
        className={selectedMode === "barChart" ? "selected" : "unselected"}
        onClick={() => handleSelectMode("barChart")}
        id="barChart"
      >
        <AiOutlineBarChart />
      </button>
      <button
        className={selectedMode === "lineChart" ? "selected" : "unselected"}
        onClick={() => handleSelectMode("lineChart")}
        id="lineChart"
      >
        <AiOutlineLineChart />
      </button>
      <button
        className={selectedMode === "tabular" ? "selected" : "unselected"}
        onClick={() => handleSelectMode("tabular")}
        id="tabular"
      >
        <AiOutlineTable />
      </button>
    </StyledSidebar>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
