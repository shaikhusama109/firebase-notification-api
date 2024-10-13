const express = require('express');
const cors = require('cors');
const tokenRoutes = require('./routes/tokenRoutes');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Use CORS middleware to allow all origins
app.use(cors());  // Allow requests from any origin

// Middleware to parse JSON requests
app.use(express.json());

// Use token routes
app.use('/api', tokenRoutes);

module.exports = app;
