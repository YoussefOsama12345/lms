const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    saltRounds: process.env.SALT_ROUNDS || 12,
};