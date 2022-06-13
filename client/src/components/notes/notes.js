import { useEffect } from "react";
import Axios from "axios";

export default function Notes({ notes, setNotes }) {
  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:9000/notes"
    }).then((res) => {
      setNotes(res.notes);
    });
  }, [setNotes])

  const createNote = (noteInfo, key) => {
    return (
      <div className={`note-${key}`} key={key.toString()}>
        <div className="noteTitle">
          {noteInfo.title}
        </div>
        <div className="noteDescription">
          {noteInfo.description}
        </div>
        <div className="noteDate">
          {noteInfo.date}
        </div>
      </div>
    )
  }
  

  return (
    <div>
      <div className="title"> 
        Title
        <div className="notes">
          {notes.map((noteInfo, key) => {
            return (
              createNote(noteInfo, key)
            )
          })}
        </div>
      </div>
    </div>
  )
}