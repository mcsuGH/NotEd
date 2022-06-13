export default function DisplayNotes({ notes }) {

  const displayNote = (noteInfo, key) => {
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
      <div className="notes">
        {notes.map((noteInfo, key) => {
          return (
            displayNote(noteInfo, key)
          )
        })}
      </div>
    </div>
  )
}