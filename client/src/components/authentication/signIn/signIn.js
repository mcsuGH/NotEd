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
    // const user = { email: email, password: password }
    // axios.post(`${url}/server/sessions`, user, { withCredentials: true });
    axios({
      method: "POST",
      data: {
        username: email,
        password: password,
      },
      withCredentials: true,
      url: `${url}/server/sessions`,
    })
  };

  return (
    <div className="form">
      Login:
      <form onSubmit={handleSubmit}>
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
        >
          Submit
        </button>
      </form>
    </div>
  )
}