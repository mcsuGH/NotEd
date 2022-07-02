import React from 'react';
import axios from 'axios';

export default function PremiumUser ({url, user}) {
  const updateUser = () => {
    axios
      .get(`${url}/server/users/premium/${user.id}`)
      .then(()=>{
        let userString = localStorage.getItem("user");
        let newUser = JSON.parse(userString);
        newUser["premium"] = true
        let newUserString = JSON.stringify(newUser)
        localStorage.setItem("user", newUserString)
      }).then(()=> window.location.href = '/premium')
  }

  const notPremium = () => {
    return (
      <div>
        <button onClick={updateUser}>Premium</button>
      </div>
    )
  }

  const alreadyPremium = () => {
    return (
      <div>
        Thanks for the support!
      </div>
    )
  }

  return (
    <div>
      {user.premium ? alreadyPremium() : notPremium() }
    </div>
  )
}