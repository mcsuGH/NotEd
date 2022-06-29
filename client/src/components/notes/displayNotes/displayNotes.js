import dayjs from 'dayjs';
import axios from 'axios';

export default function DisplayNotes({ url, notes, setNotes }) {
  const formatDate = (date) => {
    return dayjs(date).format("dddd, MMMM DD YYYY")
  }

  const noteCSS = {
    0: "indigo-200 rotate-6",
    1: "red-200 -rotate-6",
    2: "yellow-500 -rotate-1",
    3: "green-200 -rotate-3",
    4: "purple-200 rotate-2",
    5: "purple-500 rotate-3",
    6: "indigo-500 -rotate-12",
    7: "red-500 rotate-1",
    8: "blue-500 rotate-12",
    9: "green-500 -rotate-2",
  }

  const hideNote = (id) => {
    axios
      .post(`${url}/server/notes/update/${id}`)
      .then(setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id)));
  }

  const displayNote = (noteInfo, key) => {
    return (
      <div className={`note-${key}`} key={key.toString()}>
        <div className={`note block bg-${noteCSS[key]} float-left px-2 py-10  h-11/12 w-11/12`}>
          <div className="flex flex-1">
            <div className="underline decoration-dotted uppercase font-mono font-semibold w-4/5">
              {noteInfo.title}
            </div>
            <button onClick={() => hideNote(noteInfo._id)} className="font-mono bg-black text-white">
              hide
            </button>
          </div>
          <br></br>
          <div className="font-mono">
            {formatDate(noteInfo.createdAt)}
          </div>
          <br></br>
          <div className="font-mono">
            {noteInfo.description}
          </div>
        </div>
      </div>
    )
  }

  const checkNotes = () => {
    if (!notes || notes.length === 0 ) {
      return (
        <div>You have no notes</div>
      )
    } else {
      return (
        <div>
          Your Notes:
          <div className= "flex-1 grid grid-cols-5 grid-rows-2">
            {notes.map((noteInfo, key) => {
              return (
                displayNote(noteInfo, key)
              )
            })}
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {checkNotes()}
    </div>
  )
}