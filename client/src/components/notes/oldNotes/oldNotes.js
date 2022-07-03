import React from 'react';

export default function OldNotes ({hidden, fetchHiddenNotes}) {
  const displayNote = (note, key) => {
    return (
      <div key={key}>
        <br></br>
        <div className="note block bg-gray-200 float-left px-2 py-10  h-11/12 w-11/12">
          <p className="font-bold break-all overflow-auto max-h-12">{note.title}</p>
          <br></br>
          <p className="break-all overflow-auto max-h-12">{note.description}</p>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <button 
        className="bg-white-500 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 border border-gray-500 rounded"
        onClick={()=>fetchHiddenNotes()}
      >
        Old Notes
      </button>
      <div className="flex flex-1 grid grid-cols-5">
        {hidden.map((note, key) => displayNote(note, key))}
      </div>
    </div>
  )
}