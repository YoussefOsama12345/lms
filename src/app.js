const express = require('express');
const connectDB = require('./config/db');
const helmet = require('helmet');
const cors = require('cors');
const loggerMiddleware = require('./utils/logger');
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());
app.use(loggerMiddleware.httpLogger);
app.use(loggerMiddleware.morganToWinston);
app.use(loggerMiddleware.errorLogger);
app.use(helmet());
app.use(cors());

// Importing routes
const courseRoutes = require('./routes/course.routes');

app.use(express.json());

connectDB();

// Importing routes
app.use('/api', courseRoutes);

app.get('/api', (req, res) => {
  res.send('Welcome to the CodeZone API');
});

module.exports = app;
