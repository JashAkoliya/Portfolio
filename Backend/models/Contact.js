const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  countryCode: String,
  website: String,
  budget: String,
  requirement: String,
  message: String
});

module.exports = mongoose.model('Contact', contactSchema);
