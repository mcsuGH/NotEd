import React  from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import Notes from "./components/notes/notes"

export default function App() {
  let url;
  if (process.env.REACT_APP_HEROKU_URL) {
    url = `${process.env.REACT_APP_HEROKU_URL}`;
  } else {
    url = "http://localhost:9000";
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/notes" element={<Notes url={url}/>} />
      </Routes>
    </div>
  );
}

