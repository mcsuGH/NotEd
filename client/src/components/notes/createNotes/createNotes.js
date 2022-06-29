import React, { useState } from "react";
import axios from "axios";

export default function CreateNotes( {url, user, notes, setNotes} ) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(null);

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleSubmit = () => {
    if (notes.length < 10) { 
      setMessage(null)
      const newNote = { 
        title: title, 
        description: description,
        userId: user.id,
        hidden: false,
      }
      axios
        .post(`${url}/server/notes/create`, newNote)
        .then((res) => {
          let createdNote = res.data
          setNotes((prevNotes) => [createdNote, ...prevNotes]
        )});
    } else {
      setMessage("You can only have 10 notes at a time")
    }
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
      <br></br>
      <p>
        {message}
      </p>
    </div>
  )
}