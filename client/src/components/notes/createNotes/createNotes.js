import React, { useState } from "react";
import axios from "axios";

export default function CreateNotes( {url, user, setNotes} ) {
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
    axios
      .post(`${url}/server/notes/create`, newNote)
      .then((res) => {
        let createdNote = res.data
        setNotes((prevNotes) => [createdNote, ...prevNotes]
      )});
  };

  return (
    <div className="form">
      Create Note:
      <br></br>
      <input
        aria-label="title"
        placeholder="Title"
        id="title"
        type="text"
        onChange={handleTitle}
      />
      <br></br>
      <input
        aria-label="description"
        placeholder="Description"
        id="description"
        type="text"
        onChange={handleDescription}
      />
      <br></br>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-white-500 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 border border-gray-500 rounded"
      >
        Submit
      </button>
    </div>
  )
}