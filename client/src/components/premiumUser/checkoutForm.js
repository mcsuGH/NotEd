import React, {useState, useEffect} from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';

export default function CheckoutForm ({url, user}) {
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const updateUser = () => {
    axios
      .get(`${url}/server/users/premium/${user.id}`)
      .then(()=>{
        let userString = localStorage.getItem("user");
        let newUser = JSON.parse(userString);
        newUser["premium"] = true
        let newUserString = JSON.stringify(newUser)
        localStorage.setItem("user", newUserString)
      })
      .then(()=> window.location.href = '/premium')
  }

  useEffect(() => {
    if (url) {
      axios
      .post(`${url}/server/users/checkout`)
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);

  const makePayment = async (event) => {
    event.preventDefault();
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setMessage("Payment failed")
    } else {
      setMessage("Payment succeeded")
      updateUser();
    }
  }

  return (
    <div>
      <form onSubmit={makePayment}>
        <CardElement />
        <button>Pay</button>
      </form>
      {message}
    </div>
  )
}