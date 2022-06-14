import dayjs from 'dayjs';

export default function DisplayNotes({ notes }) {
  const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YY")
  }

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
          {formatDate(noteInfo.createdAt)}
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
      <div className="notes">
        {checkNotes()}
      </div>
    </div>
  )
}