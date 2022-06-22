import React, { useContext } from "react";
import dayjs from "dayjs";
import CalendarGlobalContext from "../../../context/calendarGlobalContext";

export default function Day({ day, _key, rowIdx, data }) {
  return (
    <div>
      {data.map((event, key) => {
        return (
          <div key={key}>
            <p>{event.title}</p>
            <p>{event.description}</p>
          </div>
        )
      })}
    </div>
  )
}