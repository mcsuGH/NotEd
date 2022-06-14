import React, { useState, useEffect } from "react";
import Axios from "axios";
import DisplayNotes from "./displayNotes/displayNotes";
import CreateNotes from "./createNotes/createNotes";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:9000/server/notes"
    }).then((res) => {
      setNotes(res.data.notes);
    });
  }, [setNotes])

  return (
    <div>
      <CreateNotes />
      <DisplayNotes notes={notes} />
    </div>
  )
}



