const express = require('express')
const router = express.Router()
const ROUTES = require('../constants/paths')
const couponController = require('../controllers/coupon.controller')


router.get('/coupons', couponController.getAllCoupons);
router.post('/coupons', couponController.createCoupon);
router.get('/coupons/validate/:code', couponController.validateCoupon);
router.delete('/coupons/:couponId', couponController.deleteCoupon);

module.exports = router;
