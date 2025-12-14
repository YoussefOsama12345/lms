const express = require('express');
const helmet = require('helmet');
const cors = require('cors');



// Create Express app instance
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());


// Import routes
// Import routes
// const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const courseRoutes = require('./routes/course.routes');
// const categoryRoutes = require('./routes/category.routes');
// const assignmentRoutes = require('./routes/assignment.routes');
// const certificateRoutes = require('./routes/certificate.routes');
// const couponRoutes = require('./routes/coupon.routes');
// const enrollmentRoutes = require('./routes/enrollment.routes');
// const lessonRoutes = require('./routes/lesson.routes');
// const orderRoutes = require('./routes/order.routes');
// const progressRoutes = require('./routes/progress.routes');
// const quizRoutes = require('./routes/quiz.routes');
// const reviewRoutes = require('./routes/review.routes');
// const sectionRoutes = require('./routes/section.routes');
// const uploadRoutes = require('./routes/upload.routes');
// const wishlistRoutes = require('./routes/wishlist.routes');


app.use('/api', userRoutes);
app.use('/api', courseRoutes);


// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Root route
app.get('/api', (req, res) => {
  res.send('Welcome to the CodeZone API');
});

module.exports = app;
