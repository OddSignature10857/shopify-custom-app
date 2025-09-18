
const mongoose = require('mongoose');
require('dotenv').config(); 

const DATABASE_URL = process.env.DATABASE_URL;

async function connectDB() {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
}

module.exports = connectDB;
