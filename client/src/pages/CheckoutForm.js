import React, { useCallback, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { CartContext } from "../context/CartProvider";


const stripePromise = loadStripe('pk_live_51PmU7jRrsN1cSu9LdoJAUM2CErIAnUr6qkqHsmOlwDb5En66mkmUbcXxsoCrGsMQlPAstayAcmXcCJqhFyjiGBHN00y0iuVDiA')
const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.BASE_URL || "http://localhost:8888";

function CheckoutForm () {
  const { cartItems } = useContext(CartContext);

  const fetchClientSecret = useCallback(() => {
    // Fetch the client secret by creating a checkout session
    return fetch(`${BASE_URL}/api/stripe/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }), // Use actual cartItems here
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, [cartItems]); // Ensure the useCallback depends on cartItems

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
        <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
        >
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>

    </div>
  )
}

export { CheckoutForm }
