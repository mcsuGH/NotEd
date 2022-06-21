import React from "react";
import dayjs from "dayjs";

const CalendarGlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  daySelected: dayjs(),
  setDaySelected: (day) => {},
  showCreateEvent: false,
  setShowCreateEvent: () => {},
  labels: [],
  setLabels: () => {},
  updateLabel: () => {},
});

export default CalendarGlobalContext;
