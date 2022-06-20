import React, { useState }  from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import SignIn from "./components/authentication/signIn/signIn"
import SignUp from "./components/authentication/signUp/signUp"
import Notes from "./components/notes/notes"
import CreateEvent from "./components/calendarEvents/createEvent/createEvent"

export default function App() {
  let url;
  if (process.env.REACT_APP_HEROKU_URL) {
    url = `${process.env.REACT_APP_HEROKU_URL}`;
  } else {
    url = "http://localhost:9000";
  }

  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn url={url} setUser={setUser} user={user} />} />
        <Route path="/register" element={<SignUp url={url}/>} />
        <Route path="/notes" element={<Notes url={url}/>} />
        <Route path="/calendar" element={<CreateEvent url={url}/>} />
      </Routes>
    </div>
  );
}

