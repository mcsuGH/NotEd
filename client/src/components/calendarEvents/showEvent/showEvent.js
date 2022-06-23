import React from "react";
import dayjs from 'dayjs';

export default function ShowEvent( {event} ) {
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-2xl w-1/3">
      <header className={`bg-red-100 px-4 py-2 flex justify-between items-center`}>

      </header>
        <div className="p-3">
          <div className="grid items-end gap-y-7">
            <div className="pt-3 border-0 text-gray-400 pb-2 w-full text-left ml-3">
              {dayjs(event.date).format("dddd, MMMM DD YYYY")}
            </div>
            <p
              aria-label="showTitle"
              id="showTitle"
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            >
              {event.title}
            </p>
          
            <p
              aria-label="showDescription"
              id="showDescription"
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            >
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}