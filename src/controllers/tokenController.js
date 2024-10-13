
const { getAccessToken } = require('../services/googleAuthService');

async function fetchAndStoreToken(req, res) {
  try {
    const tokenResponse = await getAccessToken();

    if (!tokenResponse || !tokenResponse.token) {
      throw new Error('Token not received');
    }

    const { token } = tokenResponse;

    res.json({ message: 'Token fetched and stored successfully', token });

  } catch (error) {
    console.error('Error fetching token:', error);
    
    return res.status(500).json({ error: 'Failed to fetch token' });
  }
}

module.exports = { fetchAndStoreToken };
