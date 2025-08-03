const dotenv = require('dotenv');

dotenv.config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

module.exports = { config };
