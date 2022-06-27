import React, { useContext } from "react";
import dayjs from "dayjs";
import CalendarGlobalContext from "../../../context/calendarGlobalContext";

export default function Day({ day, _key, rowIdx, events, setEventSelected, setShowCreateEvent }) {
  const { daySelected, setDaySelected } = useContext(CalendarGlobalContext);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  const createEvent = () => {
    setDaySelected(day);
    console.log(day);
    console.log(daySelected);
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
            className={`bg-${event.label}-500 w-full text-white`}
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