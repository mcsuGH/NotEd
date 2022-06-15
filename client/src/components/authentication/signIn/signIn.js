import React, { useState } from "react";
import axios from "axios";

export default function SignIn( { url, setUser, user } ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const user = { username: email, password: password }
    axios.post(`${url}/server/sessions`, user)
  };

  return (
    <div className="form">
      {user.email}
      Login:
      <form>
        <input
          aria-label="email"
          placeholder="Email"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          aria-label="password"
          placeholder="Password"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          name="action"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
    </div>
  )
}