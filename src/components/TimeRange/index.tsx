import React, { useContext } from "react";
import { format, addDays, subDays } from "date-fns";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AppDataContext } from "../../providers/appdata.provider";
import { StyledTimeRange } from "./style";

/**
 * Component provides interface to navigate between different dates.
 */
const TimeRange: React.FC = () => {
  /** Context api hook */
  const { selectedDate, setSelectedDate } = useContext(AppDataContext);

  /** Add a day to the current day */
  const handleAddDay = () => {
    setSelectedDate(addDays(selectedDate, 1));
  };

  /** Subtract a day from current */
  const handleSubtractDay = () => {
    setSelectedDate(subDays(selectedDate, 1));
  };

  return (
    <StyledTimeRange>
      <button onClick={handleSubtractDay}>
        <BsChevronLeft size={28} />
      </button>
      <h1>{format(selectedDate, "dd.MM.yyyy")}</h1>
      <button onClick={handleAddDay}>
        <BsChevronRight size={28} />
      </button>
    </StyledTimeRange>
  );
};

TimeRange.displayName = "TimeRange";

export default TimeRange;
