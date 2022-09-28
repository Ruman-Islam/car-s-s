const express = require('express');
const postController = require('../../controller/post.controller');
const router = express.Router();


router
    .route('/add-a-order')
    .post(postController.postAOrder)

router
    .route('/get-user-shopping-cart')
    .post(postController.getShoppingCart)


router
    .route('/add-review')
    .post(postController.addReview)

module.exports = router;