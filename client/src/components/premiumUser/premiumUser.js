import React from 'react';
import axios from 'axios';

export default function PremiumUser ({url, user}) {
  const updateUser = () => {
    axios.get(`${url}/server/users/premium/${user.id}`)
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