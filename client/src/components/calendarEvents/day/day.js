import React, { useContext } from "react";
import Popup from "reactjs-popup";
import dayjs from "dayjs";

import CalendarGlobalContext from "../../../context/calendarGlobalContext";

export default function Day({ day, _key, rowIdx, events }) {

  return (
    <div>
      {events.map((event, key) => {
        return (
          <Popup
            trigger={
              <button
                className={`bg-${event.label}-500 w-full text-white`}
              >
                {event.date === day.format("DD-MM-YY") && event.title}
              </button>
            }
            position="left center"
            on="click"
            key={key}
          >
            <div>
              <p>{event.title}</p>
              <p>{event.description}</p>
            </div>
          </Popup>
        );
      })}
    </div>
  )
}