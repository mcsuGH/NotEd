import React, { useContext } from "react";
import dayjs from "dayjs";
import CalendarGlobalContext from "../../../context/calendarGlobalContext";

export default function Day({ day, _key, rowIdx, events }) {

  return (
    <div>
      {events.map((event, key) => {
        return (
          <div key={key}>
            {event.date === day.format("DD-MM-YY") && event.title}
          </div>
        )
      })}
    </div>
  )
}