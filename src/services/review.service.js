const reviewRepository = require('../reposatory/review.repository');

const getAllReviews = async () => {
    return await reviewRepository.findAll();
};

const getReviewById = async reviewId => {
    return await reviewRepository.findById(reviewId);
};

const createReview = async reviewData => {
    return await reviewRepository.create(reviewData);
};

const updateReview = async (reviewId, reviewData) => {
    return await reviewRepository.update(reviewId, reviewData);
};

const deleteReview = async reviewId => {
    return await reviewRepository.remove(reviewId);
};

const reviewService = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
};

module.exports = reviewService;
