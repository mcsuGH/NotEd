import React from 'react';
import axios from 'axios';
import header from '../../images/header.png';

export default function Header ({url, user}) {
  const logOut = () => {
    axios
      .post(`${url}/server/sessions/logout`, { withCredentials: true })
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
      <div className="bg-blue-300 flex flex-1 grid">
        <div className="w-1/6 place-self-center">
          <img
            src={header}
            alt=""
          />
        </div>
        {user ? whenLoggedIn() : notLoggedIn()}
      </div>
    </div>
  )
}