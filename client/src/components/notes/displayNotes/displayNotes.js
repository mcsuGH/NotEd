import dayjs from 'dayjs';

export default function DisplayNotes({ notes }) {
  const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YY")
  }

  const noteCSS = {
    0: "indigo-200 rotate-6",
    1: "red-200 -rotate-6",
    2: "blue-200 -rotate-1",
    3: "green-200 -rotate-3",
    4: "purple-200 rotate-2",
    5: "purple-500 rotate-3",
    6: "indigo-500 -rotate-12",
    7: "red-500 rotate-1",
    8: "blue-500 rotate-12",
    9: "green-500 -rotate-2",
  }

  const displayNote = (noteInfo, key) => {
    return (
      <div className={`note-${key}`} key={key.toString()}>
        <div className={`note block bg-${noteCSS[key]} float-left mt-2 ml-2 mr-2 mb-2 py-10 w-4/5`}>
          <div className="noteTitle">
            {noteInfo.title}
          </div>
          <div className="noteDescription">
            {noteInfo.description}
          </div>
          <div className="noteDate">
            {formatDate(noteInfo.createdAt)}
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