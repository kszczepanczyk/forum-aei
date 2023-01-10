const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    id: {
      type: Number,
      unique: true
    },
    type: {
      type: String,
      required: true,
    },
    post_id: {
      type: Number,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    }
  });
  
  
  
  const reaction = mongoose.model('reaction', reactionSchema);
  
  module.exports = reaction;