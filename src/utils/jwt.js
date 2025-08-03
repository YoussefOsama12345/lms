const jwt = require('jsonwebtoken');
const { config } = require('../config/env');
const JWT_SECRET = config.jwtSecret
const JWT_EXPIRES_IN = config.jwtExpiresIn;

const generateToken = (payload) => {
  return jwt.sign(
    payload,
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  )
}

const verifyToken = (token) => {
  try{
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return error.message;
  }
}

const decodeToken = (token) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    return error.message;
  }
}

const jwtUtils = {
  generateToken,
  verifyToken,
  decodeToken
}

module.exports = jwtUtils;
