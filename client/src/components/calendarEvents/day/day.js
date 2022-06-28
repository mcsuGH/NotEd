import React from "react";
import dayjs from "dayjs";

export default function Day({ day, _key, rowIdx, events, setEventSelected, setShowCreateEvent, setDaySelected }) {

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  const createEvent = () => {
    setDaySelected(day);
    setShowCreateEvent(true);
  }

  return (
    <div className="border border-gray-200 flex flex-col"> 
      <header className="flex flex-col items-center">
          {rowIdx === 0 && (
            <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
          )}
          <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
            {day.format("DD")}
          </p>
      </header>
      {events.map((event, key) => {
        return (
          <button 
            key={key}
            type="submit"
            onClick={()=>setEventSelected(event)}
            className={`bg-${event.label}-500 w-full text-white truncate`}
          > 
            {event.date === day.format("YYYY-MM-DD") && event.title}
          </button>
        );
      })}
      <div className="flex-1 cursor-pointer" onClick={createEvent}>
        <br></br>
      </div>
    </div>
  )
}