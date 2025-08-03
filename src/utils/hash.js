const bcrypt = require('bcrypt');
const {config} = require('../config/env');
const BCRYPT_SALT_ROUNDS = config.bcryptSaltRounds;

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
  return await bcrypt.hash(password, salt);
}

const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

const hashUtils = {
  hashPassword,
  comparePassword
}

module.exports = hashUtils;
