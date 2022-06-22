import React, { useContext, useEffect } from "react";
import dayjs from "dayjs";
import CalendarGlobalContext from "../../../context/calendarGlobalContext";

export default function Day({ day, _key, rowIdx, events }) {

  const listEvents = () => {
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

  useEffect(() => {
    console.log(events)
    listEvents()
  }, [events])

  return (
    <div>
      {listEvents()}
    </div>
  )
}