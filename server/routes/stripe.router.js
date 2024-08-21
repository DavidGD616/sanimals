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
        ui_mode: 'embedded',
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        return_url: `${process.env.CLIENT_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
        automatic_tax: {enabled: true},
    });

    res.json({ clientSecret: session.client_secret });
});

module.exports = router;