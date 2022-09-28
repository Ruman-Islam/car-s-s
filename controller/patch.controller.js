const Order = require('../models/Order');
const Service = require('../models/Service');


module.exports.updateOrderStatus = async (req, res, next) => {
    try {
        const id = req.query.id;
        const status = req.query.status;
        const result = await Order.updateOne(
            { _id: id },
            { $set: { orderStatus: status } }
        )
        if (result.modifiedCount > 0 && result.matchedCount > 0) {
            return res.status(200).json({
                "result": "Status updated successfully"
            })
        }
        res.status(400).json({
            "result": "Something went wrong"
        })
    } catch (error) {
        res.status(500).json({
            "result": "Internal Server Error"
        })
    }
}

module.exports.deleteService = async (req, res, next) => {
    try {
        const id = req.query.id;
        const result = await Service.deleteOne(
            { _id: id }
        )
        if (result.deletedCount > 0) {
            return res.status(200).json({
                "result": "Deleted successfully"
            })
        }
        res.status(400).json({
            "result": "Something went wrong"
        })
    } catch (error) {
        res.status(500).json({
            "result": "Internal Server Error"
        })
    }
}