const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

router.get('/reviews/get-all-reviews', reviewController.getAllReviews);
router.get('/reviews/get-review/:id', reviewController.getReviewById);
router.post('/reviews/create-review', reviewController.createReview);
router.put('/reviews/update-review/:id', reviewController.updateReview);
router.delete('/reviews/delete-review/:id', reviewController.deleteReview);

module.exports = router;
