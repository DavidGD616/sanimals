import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@nextui-org/react";
import { CartContext } from "../context/CartProvider";


const stripePromise = loadStripe('pk_test_51PmU7jRrsN1cSu9Lt2Cr0ROcgjK1tNnelxs27iRGVhj7eVkP42I2bVAA6Mej8spUQGA3FBfcbK6Dt4Rho5Eqokcr00eKuRElvx')
const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.BASE_URL || "http://localhost:8888";

function CheckoutButton() {
    const { cartItems } = useContext(CartContext);

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // Send cartItems to the server to create a Checkout session
        const response = await fetch(`${BASE_URL}/api/stripe/create-checkout-session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartItems }),
        });

        const session = await response.json();

        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        <Button
        onClick={handleCheckout}
        radius="sm"
        className="w-full h-16 md:w-5/12 lg:w-72 bg-black text-base text-white font-bold tracking-widest">
            Check-Out
        </Button>
    )
}

export { CheckoutButton }