const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlist.controller');

router.get('/wishlists/user/:userId', wishlistController.getUserWishlist);
router.post('/wishlists/add/:courseId', wishlistController.addToWishlist);
router.delete('/wishlists/remove/:courseId', wishlistController.removeFromWishlist);

module.exports = router;
