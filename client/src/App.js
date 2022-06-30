import React, { useState, useEffect }  from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
import './App.css';

import Header from "./components/header/header";
import SignIn from "./components/authentication/signIn/signIn";
import SignUp from "./components/authentication/signUp/signUp";
import Notes from "./components/notes/notes";
import Calendar from "./components/calendarEvents/calendar";

export default function App() {
  let url;
  if (process.env.REACT_APP_HEROKU_URL) {
    url = `${process.env.REACT_APP_HEROKU_URL}`;
  } else {
    url = "http://localhost:9000";
  }

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
    .get(`${url}/server/users`, { withCredentials: true }) 
    .then((res) => setUser(res.data));
  }, [url]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SignIn url={url} setUser={setUser} user={user} />} />
        <Route path="/register" element={<SignUp url={url}/>} />
        <Route path="/notes" element={<Notes url={url} user={user}/>} />
        <Route path="/calendar" element={<Calendar url={url} user={user}/>} />
      </Routes>
    </div>
  );
}

