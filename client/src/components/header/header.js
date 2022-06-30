import React from 'react';
import axios from 'axios';

export default function Header ({url, user}) {
  const logOut = () => {
    axios.post(`${url}/server/sessions/logout`, { withCredentials: true })
  }

  const whenLoggedIn = () => {
    return (
      <div className= "flex-1 grid grid-cols-5">
        <button onClick={()=>logOut()}>Logout</button>
        <a href="/premium">Premium</a>
        <a href="/notes">Notes</a>
        <a href="/calendar">Calendar</a>
        <a href="https://github.com/mcsuGH/NotEd">About Us</a>
      </div>
    )
  }

  const notLoggedIn = () => {
    return (
      <div className= "flex-1 grid grid-cols-5">
        <a href="/">Login</a>
        <a href="/register">Register</a>
        <a href="/notes">Notes</a>
        <a href="/calendar">Calendar</a>
        <a href="https://github.com/mcsuGH/NotEd">About Us</a>
      </div>
    )
  }

  return (
    <div>
      {user ? whenLoggedIn() : notLoggedIn()}
    </div>
  )
}