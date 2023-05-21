const mongoose = require('mongoose');
const dotenv = require('dotenv');


// load env vars
dotenv.config({ path: './config/config.env' });
const db = process.env.DB_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}



module.exports = connectDB;

