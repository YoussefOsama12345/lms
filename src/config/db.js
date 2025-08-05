const mongoose = require('mongoose');
const { config } = require('./env');

const connectDB = async () => {
  try {
    const { mongoURI } = config;

    if (!mongoURI) {
      console.error('MONGO_URI is not defined in environment variables');
      return Promise.resolve();
    }

    mongoose.set('strictQuery', false);

    await mongoose.connect(mongoURI);

    console.log(`Connected to MongoDB at ${mongoose.connection.host}`);
    return Promise.resolve();
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.log('Make sure MongoDB is running on your system');
    console.log('Or use MongoDB Atlas for cloud database');
    console.log('Application will continue without database connection');
    return Promise.resolve(); 
  }
};

module.exports = connectDB;
