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
  }, [url]);

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

  const cardStyle = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
      base: {
        iconColor: "rgb(240, 57, 122)",
        color: "rgb(240, 57, 122)",
        fontSize: "16px",
        fontFamily: '"Open Sans", sans-serif',
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "#CFD7DF"
        }
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238"
        }
      }
    }
  }

  return (
    <div>
      If you wish to help the website to keep running, it costs only £5.00 to upgrade your user to Premium status.
      <br></br>
      Premium Users are able to view their old notes that they have hidden.
      <form onSubmit={makePayment} className="">
        <CardElement options={cardStyle} />
        <button>Pay</button>
      </form>
      {message}
    </div>
  )
}