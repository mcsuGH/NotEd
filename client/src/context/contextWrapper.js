import React, { useState } from "react";
import CalendarGlobalContext from "./calendarGlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [eventSelected, setEventSelected] = useState(null);
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  return (
    <CalendarGlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        eventSelected,
        setEventSelected,
        showCreateEvent,
        setShowCreateEvent,
      }}
    >
      {props.children}
    </CalendarGlobalContext.Provider>
  );
}
