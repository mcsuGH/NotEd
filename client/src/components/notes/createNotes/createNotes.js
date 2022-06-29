import React, { useState } from "react";
import axios from "axios";

export default function CreateNotes( {url, user, notes, setNotes} ) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(<br></br>);

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleSubmit = () => {
    if (notes.length < 10) { 
      setMessage(<br></br>)
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

  // <div className={`note-${key}`} key={key.toString()}>
  // <div className={`note block bg-${noteCSS[key]} float-left px-2 py-10  h-11/12 w-11/12`}>
  //   <div className="flex flex-1">
  //     <div className="underline decoration-dotted uppercase font-mono font-semibold w-4/5">

  return (
    <div className="flex flex-1 grid">
    <div className="bg-gray-200 h-72 w-72 place-self-center font-mono">
      <br></br>
      Create Note:
      <br></br>
      <br></br>
      <input
        aria-label="title"
        placeholder="Title"
        id="title"
        type="text"
        className="bg-gray-200 border-dashed"
        onChange={handleTitle}
      />
      <br></br>
      <br></br>
      <input
        aria-label="description"
        placeholder="Description"
        id="description"
        type="text"
        className="bg-gray-200 border-dashed"
        onChange={handleDescription}
      />
      <br></br>
      <br></br>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-white-500 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 border border-gray-500 rounded"
      >
        Create
      </button>
      <br></br>
      <p>
        {message}
      </p>
    </div>
    </div>
  )
}