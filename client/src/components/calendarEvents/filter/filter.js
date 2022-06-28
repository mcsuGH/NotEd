import React, {useState} from "react";
import dayjs from 'dayjs';

export default function Filter( {
  filters, setFilters,
  monthIndex, setMonthIndex,
}) {
  const [indigo, setIndigo] = useState(true)
  const [red, setRed] = useState(true)
  const [blue, setBlue] = useState(true)
  const [green, setGreen] = useState(true)
  const [purple, setPurple] = useState(true)

  const labelValues = {
    "indigo": "General",
    "red": "Personal",
    "blue": "Family & Friends",
    "green": "Birthdays",
    "purple": "Holidays",
  }

  const clickLabel = {
    indigo() {setIndigo(!indigo)},
    red() {setRed(!red)},
    blue() {setBlue(!blue)},
    green() {setGreen(!green)},
    purple() {setPurple(!purple)}
  }

  const handleChange = (label) => {
    clickLabel[label]()
    return filters.includes(label) 
    ? setFilters((prevFilters) => prevFilters.filter((lbl) => lbl !== label))
    : setFilters((prevFilters) => [...prevFilters, label])
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
          checked={indigo}
          onChange={() => handleChange('indigo')}
          className="form-checkbox h-5 w-5 text-indigo-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["indigo"]}</span>
      </label>
      <br></br>
      <label className="float-left">
        <input
          type="checkbox"
          checked={red}
          onChange={() => handleChange('red')}
          className="form-checkbox h-5 w-5 text-red-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["red"]}</span>
      </label>
      <br></br>
      <label className="float-left">
        <input
          type="checkbox"
          checked={blue}
          onChange={() => handleChange('blue')}
          className="form-checkbox h-5 w-5 text-blue-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["blue"]}</span>
      </label>
      <br></br>
      <label className="float-left">
        <input
          type="checkbox"
          checked={green}
          onChange={() => handleChange('green')}
          className="form-checkbox h-5 w-5 text-green-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["green"]}</span>
      </label>
      <br></br>
      <label className="float-left">
        <input
          type="checkbox"
          checked={purple}
          onChange={() => handleChange('purple')}
          className="form-checkbox h-5 w-5 text-purple-400 rounded focus:ring-0 cursor-pointer"
        />
        <span className="ml-2 text-gray-700 capitalize">{labelValues["purple"]}</span>
      </label>
    </aside>
  );
}