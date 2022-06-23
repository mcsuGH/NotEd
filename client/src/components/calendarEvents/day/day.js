import React, { useContext } from "react";
import dayjs from "dayjs";

import CalendarGlobalContext from "../../../context/calendarGlobalContext";

export default function Day({ day, _key, rowIdx, events }) {
  const {
    setEventSelected,
  } = useContext(CalendarGlobalContext);

  return (
    <div>
      {events.map((event, key) => {
        return (
          <div>
            <button onClick={setEventSelected(event)}> 
              {event.date === day.format("DD-MM-YY") && event.title}
            </button>
          </div>
        );
      })}
    </div>
  )
}