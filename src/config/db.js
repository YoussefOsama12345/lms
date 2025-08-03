const mongoose = require('mongoose');
const { config } = require('./env');

const connectDB = async () => {
  try {
    const mongoURI = config.mongoURI;

    await mongoose.connect(mongoURI);

    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
