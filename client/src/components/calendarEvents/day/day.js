import React from "react";

export default function Day({ day, _key, rowIdx, events, setEventSelected, setShowCreateEvent }) {

  return (
    <div className="border border-gray-200 flex flex-col"> 
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
      <div className="flex-1 cursor-pointer" onClick={()=>setShowCreateEvent(true)}>
        <br></br>
      </div>
    </div>
  )
}