import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, Redirect  } from "react-router-dom";
import CheckoutForm from "../components/checkoutForm/CheckoutForm";
import Header from "../components/header/Header";


//Need public-key of my Stripe account :
const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token, setUser }) => {

  const location = useLocation();

  const title = location.state.title;
  const amount = Number((location.state.amount).toFixed(2));
  const security_charges = Number((amount*5/100).toFixed(2));
  const shipping_fees = Number((amount*3/100 + 1.80).toFixed(2));

  const total = Number((amount + security_charges + shipping_fees).toFixed(2));

  return token ? (
    <>
    <Header token={token} setUser={setUser}/>
    <div className="payment-bkg">

      <div>
        <h3>Resume de la commande</h3>
        <div>
          <div>
            <span>Commande</span> <span>{Number(amount)} €</span>
          </div>
          <div>
            <span>Frais de protection acheteur</span><span>{Number(security_charges)} €</span>
          </div>
          <div>
            <span>Frais de port</span><span>{Number(shipping_fees)} €</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              Total
            </div>
          <div>
            {Number(total)} €
          </div>
        </div>
        <p>Il ne vous reste plus qu'une étape pour vous offrir {title} <br></br>
          Vous allez payer {total} € (frais de protection et frais de port inclus).</p>
        <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm title={title} total={total}/>
            </Elements>
        </div>
        </div>
      </div>
    </div>
    </>
  ) : (
    <Redirect to={{
      pathname: "/login",
      state: { fromPayment: true,
        title,
        amount,
      },
    }}
    />
  )
};

export default Payment;