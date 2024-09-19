import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { PageWidth } from '../components/PageWidth';

const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.BASE_URL || "http://localhost:8888";

const Return = () => {
  const { clearCart } = useContext(CartContext);

  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    fetch(`${BASE_URL}/api/stripe/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);

        if (data.status === "complete") {
          fetch(`${BASE_URL}/api/orders/create-order`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ session_id: sessionId, cartItems }),
          });
          clearCart();
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <PageWidth>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl font-bold mb-4">THANK YOU!</h1>
            <p className="text-lg text-gray-700 mb-2">
              We are getting started on your order right away, and you will
              receive an order confirmation email shortly to{" "}
              <span className="font-semibold">
                {customerEmail}
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 mb-6">
              If you have any questions, please email{" "}
              <Link to='mailto:sanimalsstore@gmail.com' className="text-blue-500 underline font-semibold">
                sanimalsstore@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </PageWidth>
    );
  }
};

export { Return }