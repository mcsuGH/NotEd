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

  const labels = ["indigo", "red", "blue", "green", "purple"]

  const labelState = {
    indigo() {return indigo},
    red() {return red},
    blue() {return blue},
    green() {return green},
    purple() {return purple}
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

  const createLabels = () => {
    return (
      <div>
        {labels.map((label, idx) => {
          return (
            <div key={idx}>
              <label className="float-left">
                <input
                  type="checkbox"
                  checked={labelState[label]()}
                  onChange={() => handleChange(label)}
                  className={`form-checkbox h-5 w-5 text-${label}-400 rounded focus:ring-0 cursor-pointer`}
                />
                <span className="ml-2 text-gray-700 capitalize">{labelValues[label]}</span>
              </label>
              <br></br>
            </div>
          )
        })}
      </div>
    )
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
      {createLabels()}
    </aside>
  );
}