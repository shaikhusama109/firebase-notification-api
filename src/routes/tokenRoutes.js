const express = require('express');
const { fetchAndStoreToken } = require('../controllers/tokenController');

const router = express.Router();

router.get('/token', fetchAndStoreToken);

module.exports = router;
