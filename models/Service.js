const mongoose = require('mongoose');


const Service_Schema = mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
    },
    servicePrice: {
        type: String,
        required: true,
    },
    serviceDesc: {
        type: String,
        required: true,
    },
    serviceImage: {
        type: String,
        required: true,
    }

}, { timestamps: true });

const Service = mongoose.model("Service", Service_Schema);

module.exports = Service;