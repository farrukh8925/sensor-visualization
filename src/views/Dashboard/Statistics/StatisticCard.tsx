import React from "react";
import { useIntl } from "react-intl";

import { StyledStatisticsCard } from "./style";

type StatisticsCardProps = {
  value: Number;
  type: "Max" | "Min" | "Avg";
  device: String;
};

/**
 * Statistics card component
 */
const StatisticsCard: React.FC<StatisticsCardProps> = ({
  value,
  type,
  device,
}) => {
  /** Internationalization hook */
  const { formatMessage: t } = useIntl();
  return (
    <StyledStatisticsCard>
      <h2>{t({ id: type.toLocaleLowerCase() })}</h2>
      <span>{t({ id: "reportedBy" }, { device })}</span>
      <h1>{value}</h1>
    </StyledStatisticsCard>
  );
};

StatisticsCard.displayName = "StatisticsCard";

export default StatisticsCard;
