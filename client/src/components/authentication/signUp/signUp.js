import React, { useState } from "react";
import axios from "axios";

export default function SignUp( {url} ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(<br></br>);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = () => {
    const newUser = { username: email, password: password, premium: false }
    axios
      .post(`${url}/server/users/create`, newUser)
      .catch((error) => {
        setMessage("Register failed")
        throw error
      })
      .then(() => window.location.href = '/')
  };

  return (
    <div className="flex flex-1 grid">
      {message}
      <div className="block bg-gray-200 h-full w-1/5 place-self-center">
        Register:
        <br></br>
        <input
          aria-label="email"
          placeholder="Email"
          id="email"
          type="email"
          onChange={handleEmail}
        />
        <br></br>
        <input
          aria-label="password"
          placeholder="Password"
          id="password"
          type="password"
          onChange={handlePassword}
        />
        <br></br>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-white-500 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 border border-gray-500 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  )
}