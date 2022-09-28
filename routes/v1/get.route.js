const express = require('express');
const getController = require('../../controller/get.controller');
const router = express.Router();


router
    .route('/get-all-service')
    .get(getController.getAllService)


router
    .route('/get-all-review')
    .get(getController.getAllReviews)


router
    .route('/get-a-service')
    .get(getController.getAService)


router
    .route('/get-user-book-list')
    .get(getController.getUserBookList)


router
    .route('/is-admin')
    .get(getController.isAdmin)


router
    .route('/get-order-list')
    .get(getController.getOrderList)


module.exports = router;