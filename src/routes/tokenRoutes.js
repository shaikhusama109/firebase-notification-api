const express = require('express');
const { fetchAndStoreToken } = require('../controllers/tokenController');

const router = express.Router();

// Define the route to fetch and store token
router.get('/token', fetchAndStoreToken);

module.exports = router;
