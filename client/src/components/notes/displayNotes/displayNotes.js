import dayjs from 'dayjs';

export default function DisplayNotes({ notes }) {
  const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YY")
  }

  const noteColour = {
    0: "indigo-200",
    1: "red-200",
    2: "blue-200",
    3: "green-200",
    4: "purple-200",
    5: "purple-500",
    6: "indigo-500",
    7: "red-500",
    8: "blue-500",
    9: "green-500",
  }

  const displayNote = (noteInfo, key) => {
    return (
      <div className={`note-${key}`} key={key.toString()}>
        <div className={`bg-${noteColour[key]}`}>
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