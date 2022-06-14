import React  from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import Notes from "./components/notes/notes"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

