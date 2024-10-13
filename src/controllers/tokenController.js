const fs = require('fs');
const path = require('path');
const { getAccessToken } = require('../services/googleAuthService');

// Controller to fetch and store the token in the .env file
async function fetchAndStoreToken(req, res) {
  try {
    const tokenResponse = await getAccessToken();

    if (!tokenResponse || !tokenResponse.token) {
      throw new Error('Token not received');
    }

    const { token } = tokenResponse;

    // Return the response with the token
    res.json({ message: 'Token fetched and stored successfully', token });

  } catch (error) {
    console.error('Error fetching token:', error);
    
    // Always return a response in case of an error
    return res.status(500).json({ error: 'Failed to fetch token' });
  }
}

module.exports = { fetchAndStoreToken };
