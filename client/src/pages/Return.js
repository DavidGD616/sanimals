import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.BASE_URL || "http://localhost:8888";

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [loading, setLoading] = useState(true);

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
        setLoading(false);

        if (data.status === "complete") {
          fetch(`${BASE_URL}/api/orders/create-order`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ session_id: sessionId, cartItems }),
          })
          .then((response) => response.json())
          .then((result) => {
            console.log('Order created:', result);
          })
          .catch((error) => {
            console.error('Error saving order:', error);
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching session status:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }
};

export { Return }