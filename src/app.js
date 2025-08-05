const express = require('express');
const connectDB = require('./config/db');
const loggerMiddleware = require('./utils/logger');
const helmet = require('helmet');
const cors = require('cors');

// queues
const emailQueue = require('./jobs/queues/emailQueue');
const certificateQueue = require('./jobs/queues/certificateQueue');
const enrollmentQueue = require('./jobs/queues/enrollmentQueue');

// Create Express app instance
const app = express();

// Bull Board
const { createBullBoard } = require('@bull-board/api');
const { ExpressAdapter } = require('@bull-board/express');
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');

// install bull board
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/api/admin/queues');

// Create Bull Board with error handling
try {
  createBullBoard({
    queues: [
      new BullMQAdapter(emailQueue),
      new BullMQAdapter(certificateQueue),
      new BullMQAdapter(enrollmentQueue),
    ],
    serverAdapter,
  });
  console.log('Bull Board initialized successfully');
} catch (error) {
  console.error('Error initializing Bull Board:', error);
}

// Connect to DB
connectDB();

// Middleware
app.use(loggerMiddleware.httpLogger)
app.use(loggerMiddleware.httpLogger)
app.use(loggerMiddleware.morganToWinston)
app.use(express.json());
app.use(cors());
app.use(helmet());

// Bull Board route
app.use('/api/admin/queues', serverAdapter.getRouter());

// Import routes
const courseRoutes = require('./routes/course.routes');
const categoryRoutes = require('./routes/category.routes');


app.use('/api', courseRoutes);
app.use('/api', categoryRoutes);

// Root route
app.get('/api', (req, res) => {
  res.send('Welcome to the CodeZone API');
});


module.exports = app;
