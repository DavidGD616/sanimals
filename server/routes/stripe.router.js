const express = require('express');
const Stripe = require('stripe');
require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    // res.json({ message: 'Simple response to test' });
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
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.json({ id: session.id });
    // res.send({ url: session.url });
});

module.exports = router;