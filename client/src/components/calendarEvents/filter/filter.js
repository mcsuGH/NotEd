import React from "react";

export default function Filter() {
  const labels = [
    "indigo",
    "red",
    "blue",
    "green",
    "purple",
  ];

  const labelValues = {
    "indigo": "General",
    "red": "Personal",
    "blue": "Family & Friends",
    "green": "Birthdays",
    "purple": "Holidays",
  }

  return (
    <aside className="border p-5 w-48">
      <p className="text-gray-500 font-bold mt-10">Filter</p>
      {labels.map((label, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked
            onChange={()=>console.log("hi")}
            className={`form-checkbox h-5 w-5 text-${label}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{labelValues[label]}</span>
        </label>
      ))}
    </aside>
  );
}