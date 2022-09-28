const Service = require('../models/Service');
const Review = require('../models/Review');
const Order = require('../models/Order');


module.exports.getAllService = async (req, res, next) => {
    try {
        const result = await Service.find({});
        if (result?.length <= 0) {
            res.status(404).json({
                "result": "No data found"
            })
        }
        res.status(200).json({
            "result": result
        })
    } catch (error) {
        res.status
    }
}


module.exports.getAService = async (req, res, next) => {

    try {
        const id = req.query.id
        const result = await Service.findOne({ _id: id });
        if (!result) {
            res.status(404).json({
                "result": "No data found"
            })
        }
        res.status(200).json({
            "result": result
        })
    } catch (error) {
        res.status
    }
}


module.exports.getAllReviews = async (req, res, next) => {
    try {
        const result = await Review.find({});
        if (result?.length <= 0) {
            res.status(404).json({
                "result": "No data found"
            })
        }
        res.status(200).json({
            "result": result
        })
    } catch (error) {
        res.status
    }
}


module.exports.getUserBookList = async (req, res, next) => {
    try {
        const email = req.query.email;
        const result = await Order.find({ email: email })

        if (result.length > 0) {
            return res.status(200).json({
                "result": result
            })
        }
        res.status(404).json({
            "error": "No data found"
        })
    } catch (error) {
        res.status(500).json({
            "error": "Internal Server Error"
        })
    }
}


module.exports.getOrderList = async (req, res, next) => {
    try {
        const result = await Order.find({})

        if (result.length > 0) {
            return res.status(200).json({
                "result": result
            })
        }
        res.status(404).json({
            "error": "No data found"
        })
    } catch (error) {
        res.status(500).json({
            "error": "Internal Server Error"
        })
    }
}


module.exports.isAdmin = async (req, res, next) => {
    try {
        const email = req.query.email;
        if (email === 'anikroy2215@gmail.com') {
            return res.status(200).json({
                "result": true
            })
        } else {
            return res.status(200).json({
                "result": false
            })
        }
    } catch (error) {

    }
}