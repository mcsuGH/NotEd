import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe("pk_test_51LHSPpApN9hcJxkaXALanCStGhi7eOTPytNUKm4q2IBtWtsLSnzUmzFSCcYNIWf8jq4gvYrzVAWFbOGe9N6nJV7L00aHvK7gDH")

export default function PremiumUser ({url, user}) {
  const notPremium = () => {
    return (
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm url={url} user={user}/>
        </Elements>
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