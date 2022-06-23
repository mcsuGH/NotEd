import React, { useState } from "react";
import CalendarGlobalContext from "./calendarGlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());

  return (
    <CalendarGlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
      }}
    >
      {props.children}
    </CalendarGlobalContext.Provider>
  );
}
