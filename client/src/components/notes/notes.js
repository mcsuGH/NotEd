import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayNotes from "./displayNotes/displayNotes";
import CreateNotes from "./createNotes/createNotes";

export default function Notes( {url, user} ) {
  const [notes, setNotes] = useState([]);
  const [hidden, setHidden] = useState([]);

  useEffect(() => {
    if (url && user.id) {
      axios.get(`${url}/server/notes/${user.id}`).then((res) => {
        setNotes(res.data.notes);
      });
    }
  }, [setNotes, url, user.id])

  const fetchHiddenNotes = () => {
    axios.get(`${url}/server/notes/hidden/${user.id}`).then((res) => {
      setHidden(res.data.notes);
    });
  }

  const displayNote = (note) => {
    return (
      <div>
        <br></br>
        <div className="note block bg-gray-200 float-left px-2 py-10  h-11/12 w-11/12">
          <p className="font-bold break-all overflow-auto max-h-12">{note.title}</p>
          <br></br>
          <p className="break-all overflow-auto max-h-12">{note.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div>      
      <br></br>
      <div className="flex flex-1 grid grid-cols-6 p-2">
        <div className="p-2">
          <br></br>
          <CreateNotes url={url} user={user} notes={notes} setNotes={setNotes}/>
        </div>
        <div className="col-span-5 p-2">
          <DisplayNotes url={url} notes={notes} setNotes={setNotes}/>
        </div>
      </div>
      <br></br>
      <button 
        className="bg-white-500 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 border border-gray-500 rounded"
        onClick={()=>fetchHiddenNotes()}
      >
        Old Notes
      </button>
      <div className="flex flex-1 grid grid-cols-5">
        {hidden.map((note) => displayNote(note))}
      </div>
    </div>
  )
}



