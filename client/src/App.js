import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Header from "./components/header/header";
import SignIn from "./components/authentication/signIn/signIn";
import SignUp from "./components/authentication/signUp/signUp";
import Notes from "./components/notes/notes";
import Calendar from "./components/calendarEvents/calendar";
import Premium from "./components/premiumUser/premiumUser";

export default function App() {
  let url;
  if (process.env.REACT_APP_HEROKU_URL) {
    url = `${process.env.REACT_APP_HEROKU_URL}`;
  } else {
    url = "http://localhost:9000";
  }

  const userString = localStorage.getItem("user")
  const user = JSON.parse(userString)

  return (
    <div className="App">
      <Header url={url} user={user} />
      <Routes>
        <Route 
          path="/" 
          element={<SignIn url={url} user={user} />} 
        />
        <Route 
          path="/register" 
          element={<SignUp url={url}/>} 
        />
        <Route 
          path="/notes" 
          element={user ? <Notes url={url} user={user}/> : <Navigate to="/" />} 
        />
        <Route 
          path="/calendar" 
          element={user ? <Calendar url={url} user={user}/> : <Navigate to="/" />} />
        <Route 
          path="/premium" 
          element={user ? <Premium url={url} user={user}/> : <Navigate to="/" />} 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

