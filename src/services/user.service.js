const userRepository = require('../reposatory/user.repository');

const getAllUsers = async () => {
    return await userRepository.findAll();
};

const getUserById = async userId => {
    return await userRepository.findById(userId);
};

const getUserByEmail = async email => {
    return await userRepository.findByEmail(email);
};

const createUser = async userData => {
    return await userRepository.create(userData);
};

const updateUser = async (userId, userData) => {
    return await userRepository.update(userId, userData);
};

const deleteUser = async userId => {
    return await userRepository.remove(userId);
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
};
