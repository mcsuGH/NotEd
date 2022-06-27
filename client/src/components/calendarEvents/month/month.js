import React from "react";
import Day from "../day/day";

export default function Month({ month, events, setEventSelected, setShowCreateEvent }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day
              day={day}
              key={idx}
              rowIdx={i}
              aria-label={`day-${i}`}
              events={events}
              setEventSelected={setEventSelected}
              setShowCreateEvent={setShowCreateEvent}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}