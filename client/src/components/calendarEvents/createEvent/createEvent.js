import React, { useState, useContext } from "react";
import axios from "axios";
import CalendarGlobalContext from "../../../context/calendarGlobalContext";

const labelClasses = [
  "indigo",
  "red",
  "blue",
  "green",
  "purple",
  "gray",
];

export default function CreateEvent( {url} ) {
  const { daySelected } = useContext(CalendarGlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelClasses[0]);

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleSubmit = () => {
    const newEvent = { 
      title: title, 
      description: description,
      date: daySelected.format("DD-MM-YY"),
      label: selectedLabel,
    }
    axios.post(`${url}/server/calendar/create`, newEvent);
  };

  return (
    <div className="form">
      <input
        aria-label="title"
        placeholder="Title"
        id="title"
        type="text"
        onChange={handleTitle}
      />
      {daySelected.format("dddd, MMMM DD YYYY")}
      <input
        aria-label="description"
        placeholder="Description"
        id="description"
        type="text"
        onChange={handleDescription}
      />
      {labelClasses.map((label, index) => (
        <span
        aria-label={`label-${label}`}
        key={index}
        onClick={() => setSelectedLabel(label)}
        className={`bg-${label}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
      >
      {selectedLabel === label && (
        <span>
          ✓
        </span>
      )}
      </span>
      ))}
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Create
      </button>
    </div>
  )
}