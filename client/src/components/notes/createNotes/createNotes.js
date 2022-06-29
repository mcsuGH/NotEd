import React, { useState } from "react";
import axios from "axios";

export default function CreateNotes( {url, user} ) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleSubmit = () => {
    const newNote = { 
      title: title, 
      description: description,
      userId: user.id,
    }
    axios.post(`${url}/server/notes/create`, newNote);
  };

  return (
    <div className="form">
      Create Note:
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
        Submit
      </button>
    </div>
  )
}