const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
const config = require('./config/database');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Use routes
app.use('/api/items', itemRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
