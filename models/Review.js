const mongoose = require('mongoose');


const Review_Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    userImg: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }

}, { timestamps: true });

const Review = mongoose.model("Review", Review_Schema);

module.exports = Review;