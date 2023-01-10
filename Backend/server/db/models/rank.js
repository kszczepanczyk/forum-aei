const mongoose = require('mongoose');

const rankSchema = new mongoose.Schema({
    id: {
      type: Number,
      unique: true
    },
    user_id: {
      type: Number,
      required: true,
    },
    permissions: {
      type: String,
      required: true,
    }
  });
  

  
  const rank = mongoose.model('rank', rankSchema);
  
  module.exports = rank;