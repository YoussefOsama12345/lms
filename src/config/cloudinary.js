const cloudinary = require('cloudinary').v2;
const { config } = require('./env');

const CLOUD_NAME = config.cloudinary.cloudName;
const API_KEY = config.cloudinary.apiKey;
const API_SECRET = config.cloudinary.apiSecret;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});

module.exports = cloudinary;
