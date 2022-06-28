import React from "react";
import dayjs from 'dayjs';

export default function Filter( {
  indigoChecked, setIndigoChecked,
  redChecked, setRedChecked,
  blueChecked, setBlueChecked,
  greenChecked, setGreenChecked,
  purpleChecked, setPurpleChecked,
  monthIndex, setMonthIndex,
}) {
  const labelValues = {
    "indigo": "General",
    "red": "Personal",
    "blue": "Family & Friends",
    "green": "Birthdays",
    "purple": "Holidays",
  }

  return (
    <aside className="border p-5 w-56">
      <div className="text-gray-500 font-bold">
        <button 
          onClick={() => setMonthIndex(monthIndex - 1)} 
          className="float-left w-5 bg-gray-700 text-white rounded focus:ring-0 cursor-pointer"
        >
          «  
        </button>
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        <button 
          onClick={() => setMonthIndex(monthIndex + 1)} 
          className="float-right w-5 bg-slate-700 text-white rounded focus:ring-0 cursor-pointer"
        >
          »
        </button>
      </div>
      <p className="text-gray-500 font-bold mt-2">
        Filter
      </p>
      <label className="float-left">
        <input
          type="checkbox"
          checked={indigoChecked}
          onChange={() => setIndigoChecked(!indigoChecked)}
          className="form-checkbox h-5 w-5 text-indigo-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["indigo"]}</span>
      </label>
      <br></br>
      <label className="float-left">
        <input
          type="checkbox"
          checked={redChecked}
          onChange={() => setRedChecked(!redChecked)}
          className="form-checkbox h-5 w-5 text-red-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["red"]}</span>
      </label>
      <br></br>
      <label className="float-left">
        <input
          type="checkbox"
          checked={blueChecked}
          onChange={() => setBlueChecked(!blueChecked)}
          className="form-checkbox h-5 w-5 text-blue-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["blue"]}</span>
      </label>
      <br></br>
      <label className="float-left">
        <input
          type="checkbox"
          checked={greenChecked}
          onChange={() => setGreenChecked(!greenChecked)}
          className="form-checkbox h-5 w-5 text-green-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["green"]}</span>
      </label>
      <br></br>
      <label className="float-left">
        <input
          type="checkbox"
          checked={purpleChecked}
          onChange={() => setPurpleChecked(!purpleChecked)}
          className="form-checkbox h-5 w-5 text-purple-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["purple"]}</span>
      </label>
    </aside>
  );
}