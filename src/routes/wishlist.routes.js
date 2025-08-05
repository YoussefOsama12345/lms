const express = require('express')
const router = express.Router()
const ROUTES = require('../constants/paths')
const wishlistController = require('../controllers/wishlist.controller')


router.get('/wishlists/get-all', wishlistController.getUserWishlist);
router.post('/wishlists/add-to-wishlist', wishlistController.addToWishlist);
router.delete('/wishlists/:courseId/delete-from-wishlist', wishlistController.removeFromWishlist);

module.exports = router;
