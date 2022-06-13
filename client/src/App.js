import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import Notes from "./components/notes/notes"

export default function App() {
const [notes, setNotes] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Notes notes={notes} setNotes={setNotes}/>} />
      </Routes>
    </div>
  );
}

