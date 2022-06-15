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
    const newUser = { email: email, password: password }
    axios.post(`${url}/server/users/create`, newUser);
  };

  return (
    <div className="form">
      Register:
      <form onSubmit={handleSubmit}>
        <input
          aria-label="email"
          placeholder="Email"
          id="email"
          type="text"
          onChange={handleEmail}
        />
        <input
          aria-label="password"
          placeholder="Password"
          id="password"
          type="text"
          onChange={handlePassword}
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}