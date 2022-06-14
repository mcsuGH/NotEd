import React, { useState } from "react";

export default function CreateNotes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleSubmit = () => {
    fetch("http://localhost:9000/server/notes/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        date: "13/06/22",
      }),
    });
  };

  return (
    <div className="form">
      Create Note:
      <form onSubmit={handleSubmit}>
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
        >
          Submit
        </button>
      </form>
    </div>
  )
}