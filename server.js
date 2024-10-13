const app = require('./src/app');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

console.log(`PORT value: ${PORT}`);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
