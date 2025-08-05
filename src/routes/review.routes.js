const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');
const ROUTES = require('../constants/paths');

router.get(ROUTES.REVIEW.GET_ALL_REVIEWS, reviewController.getAllReviews);
router.get(ROUTES.REVIEW.GET_REVIEW, reviewController.getReviewById);
router.post(ROUTES.REVIEW.CREATE_REVIEW, reviewController.createReview);
router.put(ROUTES.REVIEW.UPDATE_REVIEW, reviewController.updateReview);
router.delete(ROUTES.REVIEW.DELETE_REVIEW, reviewController.deleteReview);

module.exports = router;
