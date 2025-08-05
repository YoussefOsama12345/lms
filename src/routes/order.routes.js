const express = require('express')
const router = express.Router()
const ROUTES = require('../constants/paths')
const orderController = require('../controllers/order.controller')

router.post('/orders/create-order', orderController.createOrder);
router.get('/orders/get-all-orders', orderController.getUserOrders);
router.get('/orders/get-order/:orderId', orderController.getOrderById);
router.patch('/orders/update-order/:orderId', orderController.updateOrderStatus);

module.exports = router;
