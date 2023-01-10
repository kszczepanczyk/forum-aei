const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    id: {
      type: Number,
      unique: true
    },
    type: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
    post_id: {
      type: Number,
      required: true,
    }
  });
  

  
  const report = mongoose.model('report', reportSchema);
  
  module.exports = report;