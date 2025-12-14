const orderRepository = require('../reposatory/order.repository');

const getAllOrders = async () => {
    return await orderRepository.findAll();
};

const getOrderById = async orderId => {
    return await orderRepository.findById(orderId);
};

const getUserOrders = async userId => {
    return await orderRepository.findByUser(userId);
};

const createOrder = async orderData => {
    return await orderRepository.create(orderData);
};

// Orders typically have status updates
const updateOrder = async (orderId, orderData) => {
    return await orderRepository.update(orderId, orderData);
};

const deleteOrder = async orderId => {
    return await orderRepository.remove(orderId);
};

const orderService = {
    getAllOrders,
    getOrderById,
    getUserOrders,
    createOrder,
    updateOrder,
    deleteOrder,
};

module.exports = orderService;
