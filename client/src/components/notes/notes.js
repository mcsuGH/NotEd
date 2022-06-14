import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayNotes from "./displayNotes/displayNotes";
import CreateNotes from "./createNotes/createNotes";

export default function Notes( {url} ) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(`${url}/server/notes`).then((res) => {
      setNotes(res.data.notes);
    });
  }, [setNotes, url])

  return (
    <div>
      <CreateNotes url={url} />
      <DisplayNotes notes={notes} />
    </div>
  )
}



