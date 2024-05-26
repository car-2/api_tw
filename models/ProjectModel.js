const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  numberOfProject: {
    type: String,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  dateInitialization: {
    type: Date,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  dateCreate: {
    type: Date,
    default: Date.now
  },
  dateUpdate: {
    type: Date,
    default: Date.now
  },
  client: {
    type: String,
    required: true
  },
  typeProject: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Project', ProjectSchema);