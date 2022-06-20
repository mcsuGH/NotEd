import React, { useState } from "react";
import axios from "axios";

export default function CreateEvent( {url} ) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleSubmit = () => {
    const newEvent = { title: title, description: description }
    axios.post(`${url}/server/calendar/create`, newEvent);
  };

  return (
    <div className="form">
      Create Event:
      <input
        aria-label="title"
        placeholder="Title"
        id="title"
        type="text"
        onChange={handleTitle}
      />
      <input
        aria-label="description"
        placeholder="Description"
        id="description"
        type="text"
        onChange={handleDescription}
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Create
      </button>
    </div>
  )
}