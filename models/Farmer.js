const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  cropType: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Farmer', farmerSchema);
