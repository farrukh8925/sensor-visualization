import { AxiosError } from "axios";
import React, { useContext, useRef, useState } from "react";
import { getUnixTime } from "date-fns";
import { IntlShape, useIntl } from "react-intl";
import { AppDataContext } from "../../../providers/appdata.provider";
import { NotificationContext } from "../../../providers/notification.provider";
import { SensorDataContext } from "../../../providers/sensordata.provider";
import { SensorDataSet } from "../../../types/sensor.data";
import { getHistory } from "../../../utils/fetcher";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Tabular from "./Tabular";

import { HeadingDropdown, InformationRow, StyledContent } from "./style";
import Statistics from "../Statistics";
import TimeRange from "../../../components/TimeRange";

/**
 * Dashboard content
 */
const Content: React.FC = () => {
  /** Translation hook */
  const { formatMessage: t }: IntlShape = useIntl();

  /** Local state to keep track of dimensions */
  const [dimensions, setDimensions] = useState<{
    width: Number | undefined;
    height: Number | undefined;
  }>({ width: undefined, height: undefined });

  /** Ref to get the dimensions of the parent for the chart */
  const divRef = useRef<HTMLDivElement>(null);

  /** Use the context */
  const { addDataSet, dataSet } = useContext(SensorDataContext);
  const { addNotification } = useContext(NotificationContext);
  const { selectedMode, selectedDate } = useContext(AppDataContext);

  React.useEffect(() => {
    getHistory(getUnixTime(selectedDate))
      .then((response: any) => {
        addDataSet(response as SensorDataSet[]);
      })
      .catch((error: AxiosError) => {
        addNotification({
          message: t({ id: "problemFetching" }),
          type: "error",
        });
      });
  }, [selectedDate]);

  /** Use layout effect hook to determine the dimensions */
  React.useLayoutEffect(() => {
    if (divRef.current && !dimensions.width) {
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetWidth / 2,
      });
    }
  }, [dimensions.width]);

  /** Render the chart based on selected mode */
  const renderChart = () => {
    const props = { dataSet, width: dimensions.width as number };
    switch (selectedMode) {
      case "barChart":
        return <BarChart {...props} />;
      case "lineChart":
        return <LineChart {...props} />;
      case "tabular":
        return <Tabular {...props} />;
      default:
        return null;
    }
  };

  return (
    <StyledContent>
      <HeadingDropdown>
        <h1>{t({ id: "sensorReport" })}</h1>
        <TimeRange />
      </HeadingDropdown>
      <InformationRow>
        <h3>{t({ id: "sensorStatistics" })}</h3>
        <span>{t({ id: "sensorDescription" })}</span>
      </InformationRow>
      <div className="chart-container" ref={divRef}>
        {dimensions.width && dataSet && renderChart()}
      </div>
      <Statistics />
    </StyledContent>
  );
};

Content.displayName = "DashboardContent";

export default Content;
