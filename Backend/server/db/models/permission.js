const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    id: {
      type: Number,
      unique: true
    },
    type: {
      type: String,
      required: true,
    },
    user_id: {
      type: Number,
    },
    rank_id: {
      type: Number,
      required: true,
    }
  });
  
 
  
  const permission = mongoose.model('permission', permissionSchema);
  
  module.exports = permission;