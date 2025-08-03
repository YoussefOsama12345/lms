const express = require('express');
const connectDB = require('./config/db');
const courseRoutes = require('./routes/course.routes');
const app = express();

app.use(express.json());

connectDB();

// Importing routes
app.use('/api', courseRoutes);

app.get('/api', (req, res) => {
  res.send('Welcome to the CodeZone API');
});

module.exports = app;
