const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

router.get('/reviews/get-all-reviews', reviewController.getAllReviews);
router.get('/reviews/get-review/:reviewId', reviewController.getReviewById);
router.post('/reviews/create-review', reviewController.createReview);
router.put('/reviews/update-review/:reviewId', reviewController.updateReview);
router.delete('/reviews/delete-review/:reviewId', reviewController.deleteReview);

module.exports = router;
