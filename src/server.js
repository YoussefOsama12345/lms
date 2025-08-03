const express = require('express');
const app = express();

// middleware to parse JSON bodies
app.use(express.json());

// Importing routes

app.get('/', (req, res) => {
  res.send('Welcome to the CodeZone API');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
