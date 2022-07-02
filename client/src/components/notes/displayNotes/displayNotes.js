import dayjs from 'dayjs';
import axios from 'axios';

export default function DisplayNotes({ url, notes, setNotes, setHidden, hiddenFetched }) {
  const formatDate = (date) => {
    return dayjs(date).format("dddd, MMMM DD YYYY")
  }

  const noteCSS = {
    0: "indigo-500 rotate-6",
    1: "red-200 -rotate-6",
    2: "blue-500 -rotate-1",
    3: "green-200 -rotate-3",
    4: "purple-500 rotate-2",
    5: "purple-200 rotate-3",
    6: "indigo-200 -rotate-12",
    7: "red-500 rotate-1",
    8: "blue-200 rotate-12",
    9: "green-500 -rotate-2",
  }

  const hideNote = (id) => {
    axios
      .post(`${url}/server/notes/update/${id}`)
      .then(() => {
        if (hiddenFetched) {
          let hiddenNote = notes.filter((note) => note._id === id)
          setHidden((prevHidden) => [ hiddenNote[0], ...prevHidden])
        }
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      })
  }

  const displayNote = (noteInfo, key) => {
    return (
      <div className={`note-${key}`} key={key.toString()}>
        <div className={`note block bg-${noteCSS[key]} float-left px-2 py-10  h-11/12 w-11/12 font-mono`}>
          <div className="flex flex-1">
            <div className="underline decoration-dotted uppercase font-semibold w-4/5 max-h-12 overflow-auto break-all">
              {noteInfo.title}
            </div>
            <button onClick={() => hideNote(noteInfo._id)} className="hover:bg-black text-white">
              hide
            </button>
          </div>
          <br></br>
          <div>
            {formatDate(noteInfo.createdAt)}
          </div>
          <br></br>
          <div className="overflow-auto break-all max-h-12">
            {noteInfo.description}
          </div>
        </div>
      </div>
    )
  }

  const checkNotes = () => {
    if (!notes || notes.length === 0 ) {
      return (
        <p className="font-mono text-red-500">You have no notes</p>
      )
    } else {
      return (
        <div className= "flex-1 grid grid-cols-5 grid-rows-2">
          {notes.map((noteInfo, key) => {
            return (
              displayNote(noteInfo, key)
            )
          })}
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