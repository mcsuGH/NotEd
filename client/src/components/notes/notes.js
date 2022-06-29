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
      <CreateNotes url={url} user={user} setNotes={setNotes}/>
      <DisplayNotes notes={notes} url={url} />
    </div>
  )
}



