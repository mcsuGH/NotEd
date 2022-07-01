import React from 'react';
import axios from 'axios';
import header from '../../images/header.png';

export default function Header ({url, user}) {
  const logOut = () => {
    axios
      .post(`${url}/server/sessions/logout`, { withCredentials: true })
      .then(() => {
        window.location.href = '/';
      });
  }

  const whenLoggedIn = () => {
    return (
      <div className= "flex-1 grid grid-cols-5">
        <button className="border border-black" onClick={()=>logOut()}>Logout</button>
        <a className="border border-black" href="/premium">Premium</a>
        <a className="border border-black" href="/notes">Notes</a>
        <a className="border border-black" href="/calendar">Calendar</a>
        <a className="border border-black" href="https://github.com/mcsuGH/NotEd">About Us</a>
      </div>
    )
  }

  const notLoggedIn = () => {
    return (
      <div className= "flex-1 grid grid-cols-5">
        <a className="border border-black" href="/">Login</a>
        <a className="border border-black" href="/register">Register</a>
        <a className="border border-black" href="/notes">Notes</a>
        <a className="border border-black" href="/calendar">Calendar</a>
        <a className="border border-black" href="https://github.com/mcsuGH/NotEd">About Us</a>
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