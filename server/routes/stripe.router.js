const express = require('express');
const Stripe = require('stripe');
require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const { cartItems } = req.body;
    const lineItems = cartItems.map(item => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.title,
                images: [item.image],
            },
            unit_amount: item.price,
        },
        quantity: item.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 399,
                currency: 'usd',
              },
              display_name: 'Ground Shipping',
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 5,
                },
                maximum: {
                  unit: 'business_day',
                  value: 7,
                },
              },
            },
          },
        ],
        phone_number_collection: {
          enabled: true,
        },
        line_items: lineItems,
        mode: 'payment',
        return_url: `${process.env.CLIENT_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
        automatic_tax: {enabled: true},
    });

    res.json({ clientSecret: session.client_secret });
});

router.get('/session-status', async (req, res) => {
    const sessionId = req.query.session_id;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
  
    res.send({
      status: session.status,
      customer_email: session.customer_details.email
    });
  });

module.exports = router;