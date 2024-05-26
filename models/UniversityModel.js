const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  telphone: {
    type: String,
    required: true
  },
  dateCreate: {
    type: Date,
    default: Date.now
  },
  dateUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('University', UniversitySchema);