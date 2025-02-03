// server/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes'); // Import employee routes

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json()); // For parsing application/json

// Use employee routes
app.use('/api', employeeRoutes); // All employee routes will be prefixed with /api

// Test route
app.get('/', (req, res) => {
  res.send('Employee management system is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
