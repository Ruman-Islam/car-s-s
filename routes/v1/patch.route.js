const express = require('express');
const patchController = require('../../controller/patch.controller');
const router = express.Router();

router
    .route('/update-order-status')
    .patch(patchController.updateOrderStatus)

router
    .route('/delete-service')
    .patch(patchController.deleteService)


module.exports = router;