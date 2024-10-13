const express = require('express');
const cors = require('cors');
const tokenRoutes = require('./routes/tokenRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());  

app.use(express.json());

app.use('/api', tokenRoutes);

module.exports = app;
