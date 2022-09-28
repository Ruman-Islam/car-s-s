const mongoose = require('mongoose');


const Order_Schema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    serviceName: {
        type: String,
        required: true,
    },
    servicePrice: {
        type: Number,
        required: true,
    },
    serviceImage: {
        type: String,
        required: true,
    },
    serviceDesc: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
    orderStatus: {
        type: String,
        default: 'Pending'
    }

}, { timestamps: true });

const Order = mongoose.model("Order", Order_Schema);

module.exports = Order;