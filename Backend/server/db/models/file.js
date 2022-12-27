const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    id: {
      type: Number,
      unique: true
    },
    path: {
      type: String,
      required: true,
    },
    date_created: {
      type: Date,
      default: Date.now
    },
    name: {
      type: String,
      required: true,
    }
  });
  
 
  
  const file = mongoose.model('file', fileSchema);
  
  module.exports = file;