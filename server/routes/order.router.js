const express = require('express');
const Order = require('../models/order.model');
const Stripe = require('stripe');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// Route to create an order
router.post('/create-order', async (req, res) => {
    try {
        const { session_id, cartItems } = req.body; 

        const session = await stripe.checkout.sessions.retrieve(session_id, {
            expand: ['shipping_details', 'customer_details'], 
        });

        // console.log('Stripe session retrieved:', session);

        const lineItems = cartItems.map(item => ({
            product_id: item.id,
            variant_id: item.variant_ids,
            quantity: item.quantity,
        }));

        const shippingAddress = {
            first_name: session.shipping_details.name.split(' ')[0],
            last_name: session.shipping_details.name.split(' ')[1] || '',
            email: session.customer_details.email,
            phone: session.customer_details.phone ? session.customer_details.phone.replace(/^\+1/, '') : '',
            country: session.shipping_details.address.country,
            region: session.shipping_details.address.state || '',
            city: session.shipping_details.address.city,
            address1: session.shipping_details.address.line1,
            address2: session.shipping_details.address.line2 || '',
            zip: session.shipping_details.address.postal_code,
        };

        const externalId = uuidv4();

        const newOrder = new Order({
            external_id: externalId,
            line_items: lineItems,
            shipping_method: 1,
            address_to: shippingAddress,
        });

        await newOrder.save();
        // console.log('Order saved to database:', newOrder);

        const printifyOrderPayload = {
            external_id: newOrder._id,
            line_items: newOrder.line_items,
            shipping_method: newOrder.shipping_method,
            is_printify_express: false,
            is_economy_shipping: false,
            send_shipping_notification: false,
            shipping_address: newOrder.address_to,
        };
        console.log('order saved', printifyOrderPayload);

        const response = await axios.post(`${process.env.PRINTIFY_API_URL}shops/16369687/orders.json`, printifyOrderPayload, {
            headers: {
                'Authorization': `Bearer ${process.env.PRINTIFY_API_TOKEN}`,
                'Content-Type': 'application/json',
            }
        });

        console.log('Printify order created successfully:', response.data);

        res.status(201).send({
            message: 'Order saved successfully',
            order: newOrder,
        });
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).send({ error: 'Failed to save order' });
    }
});

// Route to get all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).send({ error: 'Failed to fetch orders' });
    }
});

// Delete an order by its ID
router.delete('/delete-order/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const deletedOrder = await Order.findByIdAndDelete(orderId);

        if (deletedOrder) {
            res.status(200).send({ message: 'Order deleted successfully', deletedOrder });
        } else {
            res.status(404).send({ message: 'Order not found' });
        }
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).send({ error: 'Failed to delete order' });
    }
});

module.exports = router;
