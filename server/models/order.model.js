const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema line items
const lineItemSchema = new Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    variant_id: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
}, {_id: false});

// Schema Shipping Address
const addressSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    region: {
        type: String,
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
}, { _id: false });

// Schema for the order
const orderSchema = new Schema({
    external_id: {
        type: String,
        required: true,
        unique: true,
    },
    line_items: {
        type: [lineItemSchema],
        required: true,
    },
    shipping_method: {
        type: Number,
        required: true,
    },
    address_to: {
        type: addressSchema,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);