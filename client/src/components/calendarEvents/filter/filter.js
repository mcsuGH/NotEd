import React, {useState} from "react";

export default function Filter() {
  const labelValues = {
    "indigo": "General",
    "red": "Personal",
    "blue": "Family & Friends",
    "green": "Birthdays",
    "purple": "Holidays",
  }

  const [indigoChecked, setIndigoChecked] = useState(true)
  const [redChecked, setRedChecked] = useState(true)
  const [blueChecked, setBlueChecked] = useState(true)
  const [greenChecked, setGreenChecked] = useState(true)
  const [purpleChecked, setPurpleChecked] = useState(true)

  return (
    <aside className="border p-5 w-48">
    <p className="text-gray-500 font-bold mt-10">Filter</p>
    <input
      type="checkbox"
      checked={indigoChecked}
      onChange={() => setIndigoChecked(!indigoChecked)}
      className="form-checkbox h-5 w-5 text-indigo-400 rounded focus:ring-0 cursor-pointer"
    />
    <span className="ml-2 text-gray-700 capitalize">{labelValues["indigo"]}</span>
    <br></br>
    <input
      type="checkbox"
      checked={redChecked}
      onChange={() => setRedChecked(!redChecked)}
      className="form-checkbox h-5 w-5 text-red-400 rounded focus:ring-0 cursor-pointer"
    />
    <span className="ml-2 text-gray-700 capitalize">{labelValues["red"]}</span>
    <br></br>
    <input
      type="checkbox"
      checked={blueChecked}
      onChange={() => setBlueChecked(!blueChecked)}
      className="form-checkbox h-5 w-5 text-blue-400 rounded focus:ring-0 cursor-pointer"
    />
    <span className="ml-2 text-gray-700 capitalize">{labelValues["blue"]}</span>
    <br></br>
    <input
      type="checkbox"
      checked={greenChecked}
      onChange={() => setGreenChecked(!greenChecked)}
      className="form-checkbox h-5 w-5 text-green-400 rounded focus:ring-0 cursor-pointer"
    />
    <span className="ml-2 text-gray-700 capitalize">{labelValues["green"]}</span>
    <br></br>
    <input
      type="checkbox"
      checked={purpleChecked}
      onChange={() => setPurpleChecked(!purpleChecked)}
      className="form-checkbox h-5 w-5 text-purple-400 rounded focus:ring-0 cursor-pointer"
    />
    <span className="ml-2 text-gray-700 capitalize">{labelValues["purple"]}</span>
  </aside>
  );
}