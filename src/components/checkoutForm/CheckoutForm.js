import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { Link } from "react-router-dom";


const CheckoutForm = ({ title, total, userId }) => {

  const elements = useElements();
  const stripe = useStripe();
  const [succeed, setSucceed] = useState(false);
  const def_amount = total*100;

  console.log(def_amount);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/payment", {
        token: stripeToken,
        title: title,
        amount: def_amount,
      });
      console.log(response);
      if (response.data.status === "succeeded")
        setSucceed(true);

  } catch (error) {
    console.log(error.response);
  }
}
  return(
    <div className="payment-area">
      {succeed ? (
        <>
      <div className='succeeded'>Paiement validé !</div>
      <span>Récapitulatif d'achat :</span>
      <span>Date :   </span><span>{Date()}</span>
      <span>Produit acheté : {title}</span>
      <span>Pour un montant de : </span><span>{Number(def_amount/100)}</span><span> EUROS (frais compris)</span>
      <Link to="/">Offrez-vous d'autres articles !</Link>
        </>
      ) : (
      <form onSubmit={handleSubmit}>
        <CardElement/>
        <button type="submit">Pay</button>
    </form>
      )}
    </div>
  )
}

export default CheckoutForm;