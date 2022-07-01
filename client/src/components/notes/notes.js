import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayNotes from "./displayNotes/displayNotes";
import CreateNotes from "./createNotes/createNotes";

export default function Notes( {url, user} ) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (url && user.id) {
      axios.get(`${url}/server/notes/${user.id}`).then((res) => {
        setNotes(res.data.notes);
      });
    }
  }, [setNotes, url, user.id])

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
    </div>
  )
}



