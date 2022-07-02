import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayNotes from "./displayNotes/displayNotes";
import CreateNotes from "./createNotes/createNotes";
import OldNotes from "./oldNotes/oldNotes";

export default function Notes( {url, user} ) {
  const [notes, setNotes] = useState([]);
  const [hidden, setHidden] = useState([]);
  const [hiddenFetched, setHiddenFetched] = useState(false);

  useEffect(() => {
    if (url && user.id) {
      axios.get(`${url}/server/notes/${user.id}`).then((res) => {
        setNotes(res.data.notes);
      });
    }
  }, [setNotes, url, user.id])

  const fetchHiddenNotes = () => {
    if (!hiddenFetched) {
      axios.get(`${url}/server/notes/hidden/${user.id}`).then((res) => {
        setHidden(res.data.notes);
        setHiddenFetched(true);
      });
    }
  }

  return (
    <div>      
      <br></br>
      <div className="flex flex-1 grid grid-cols-6 p-2">
        <div className="p-2">
          <br></br>
          <CreateNotes url={url} user={user} notes={notes} setNotes={setNotes} />
        </div>
        <div className="col-span-5 p-2">
          <DisplayNotes url={url} notes={notes} setNotes={setNotes} setHidden={setHidden} hiddenFetched={hiddenFetched} />
        </div>
      </div>
      <br></br>
      <div className="col-span-5 p-2">
          <OldNotes hidden={hidden} fetchHiddenNotes={fetchHiddenNotes}/>
        </div>
    </div>
  )
}



