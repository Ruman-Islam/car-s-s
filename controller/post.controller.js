const Order = require('../models/Order');
const Service = require('../models/Service');
const Review = require('../models/Review');

module.exports.postAOrder = async (req, res, next) => {
    try {
        const paymentInfo = req.body;
        const order = new Order(paymentInfo)
        const result = await order.save();
        if (result) {
            res.status(200).json({
                "result": "Order is confirmed"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Error": "Internal Server Error"
        })

    }
}


module.exports.getShoppingCart = async (req, res, next) => {
    try {
        const serviceIds = req.body.shoppingCart;
        const result = await Service.find({ _id: serviceIds })
        if (result.length > 0) {
            return res.status(200).json({
                "result": result
            })
        }
        res.status(404).json({
            "error": "Not found"
        })
    } catch (error) {
        res.status(500).json({
            "error": "Internal server error"
        })
    }
}


module.exports.addReview = async (req, res, next) => {
    try {
        const newReview = req.body;
        const review = new Review(newReview);
        const result = await review.save();
        if (result) {
            return res.status(200).json({
                "result": "Review added successfully"
            })
        }
        res.status(500).json({
            "error": "Something went wrong"
        })
    } catch (error) {
        res.status(500).json({
            "error": "Internal server error"
        })
    }
}