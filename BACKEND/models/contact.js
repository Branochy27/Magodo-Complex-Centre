// models/contact.js
const mongoose = require('mongoose'); // fixed typo

// create schema
const contactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide your name']
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Please provide a valid email address'] // use RegExp
    },
    number: {
      type: String,
      required: [true, 'Please provide your phone number'],
      trim: true
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
      trim: true,
      maxlength: [1000, 'Message cannot be more than 1000 characters']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Contact', contactSchema);
