import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Content from "./Content";
import { StyledDashboardContainer } from "./style";

/**
 * Dashboard view which presents the statistics from the sensor data.
 * Different visualization options to be presented.
 */
const DashboardView: React.FC = () => {
  return (
    <StyledDashboardContainer>
      <Sidebar />
      <div className="content-container">
        <Header />
        <Content />
      </div>
    </StyledDashboardContainer>
  );
};

DashboardView.displayName = "DashboardView";

export default DashboardView;
