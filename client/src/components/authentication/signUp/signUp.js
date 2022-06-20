import React, { useState } from "react";
import axios from "axios";

export default function SignUp( {url} ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = () => {
    const newUser = { username: email, password: password }
    axios.post(`${url}/server/users/create`, newUser);
  };

  return (
    <div className="form">
      Register:
      <input
        aria-label="email"
        placeholder="Email"
        id="email"
        type="email"
        onChange={handleEmail}
      />
      <input
        aria-label="password"
        placeholder="Password"
        id="password"
        type="password"
        onChange={handlePassword}
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}