const express = require('express');
const itemRoutes = require('./routes/itemRoutes');
const sequelize = require('./models/index');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sync all models with database
sequelize.sync({ force: false })
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

// Use routes
app.use('/api/items', itemRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
