const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const mongoose = require('mongoose');

const dbOptions = {};

const db = mongoose.connect(config.db, dbOptions, (err) => {
  if (err) {
    console.log('MongoDB Connection Error: ', err);
    process.exit();
  }
});

module.exports = db;
