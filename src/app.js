const express = require('express');
const app = express();

app.use(express.json());

// Importing routes

app.get('/api', (req, res) => {
  res.send('Welcome to the CodeZone API');
});

module.exports = app;
