const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.post('/orders/create-order', orderController.createOrder);
router.get('/orders/user/:userId', orderController.getUserOrders);
router.get('/orders/get-order/:orderId', orderController.getOrderById);

module.exports = router;
