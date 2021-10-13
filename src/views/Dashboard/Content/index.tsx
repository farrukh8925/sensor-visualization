import { AxiosError } from "axios";
import React, { useContext, useRef, useState } from "react";
import { IntlShape, useIntl } from "react-intl";
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from "recharts";
import { NotificationContext } from "../../../providers/notification.provider";
import { SensorDataContext } from "../../../providers/sensordata.provider";
import { SensorDataSet } from "../../../types/sensor.data";
import { getHistory } from "../../../utils/fetcher";

import { HeadingDropdown, InformationRow, StyledContent } from "./style";

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

  React.useEffect(() => {
    getHistory()
      .then((response: any) => {
        addDataSet(response as SensorDataSet[]);
      })
      .catch((error: AxiosError) => {
        addNotification({
          message: t({ id: "problemFetching" }),
          type: "error",
        });
      });
  }, []);

  /** Use layout effect hook to determine the dimensions */
  React.useLayoutEffect(() => {
    if (divRef.current && !dimensions.width) {
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetWidth / 2,
      });
    }
  }, [dimensions.width]);

  return (
    <StyledContent>
      <HeadingDropdown>
        <h1>{t({ id: "sensorReport" })}</h1>
        <select className="select-day" name="day" id="day">
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
        </select>
      </HeadingDropdown>
      <InformationRow>
        <h3>{t({ id: "sensorStatistics" })}</h3>
        <span>{t({ id: "sensorDescription" })}</span>
      </InformationRow>
      <div className="chart-container" ref={divRef}>
        {dimensions.width && (
          <BarChart
            width={dimensions.width as number}
            height={600}
            data={dataSet}
          >
            <XAxis dataKey="hour" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Bar type="monotone" dataKey="sensor1" fill="#82ca9d" />
            <Bar type="monotone" dataKey="sensor2" fill="#8884d8" />
            <Bar type="monotone" dataKey="sensor3" fill="#007fa3" />
            <Bar type="monotone" dataKey="sensor4" fill="#588089" />
          </BarChart>
        )}
      </div>
    </StyledContent>
  );
};

Content.displayName = "DashboardContent";

export default Content;
