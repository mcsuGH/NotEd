import React, { useState, useEffect } from "react";
import Axios from "axios";
import DisplayNotes from "./displayNotes";
import CreateNotes from "./createNotes";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:9000/notes"
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



