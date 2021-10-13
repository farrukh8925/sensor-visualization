import React from "react";
import {
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlineTable,
} from "react-icons/ai";

import { StyledSidebar } from "./style";

/**
 * Sidebar component
 */
const Sidebar: React.FC = () => {
  return (
    <StyledSidebar>
      <button>
        <AiOutlineBarChart />
      </button>
      <button>
        <AiOutlineLineChart />
      </button>
      <button>
        <AiOutlineTable />
      </button>
    </StyledSidebar>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
