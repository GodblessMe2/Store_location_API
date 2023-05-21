const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/dbconfig');

// load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Connect to database 
connectDB();

// Body Parser
app.use(express.json());

// Enable cors
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/stores', require('./routes/storesRouter'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)