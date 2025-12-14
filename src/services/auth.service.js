const userService = require('./user.service');
const hashUtils = require('../utils/hash.util');
const jwt = require('jsonwebtoken');

const register = async (userData) => {
    const existingUser = await userService.getUserByEmail(userData.email);
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await hashUtils.hashPassword(userData.password);

    const newUser = await userService.createUser({
        ...userData,
        password: hashedPassword,
    });

    return newUser;
};

const login = async (email, password) => {
    const user = await userService.getUserByEmail(email);
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await hashUtils.comparePassword(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });

    return { user, token };
};

module.exports = {
    register,
    login,
};
