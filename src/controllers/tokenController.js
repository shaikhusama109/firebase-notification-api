const fs = require('fs');
const path = require('path');
const { getAccessToken } = require('../services/googleAuthService');

// Controller to fetch and store the token in the .env file
async function fetchAndStoreToken(req, res) {
  try {
    const { token } = await getAccessToken();

    res.json({ message: 'Token fetched and stored successfully', token });
  } catch (error) {
    console.error('Error fetching token:', error);
    res.status(500).json({ error: 'Failed to fetch token' });
  }
}

module.exports = { fetchAndStoreToken };
