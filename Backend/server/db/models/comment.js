const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  post_id: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  username:
  {
    type:String,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  }
});



const comment = mongoose.model('comment', commentSchema);

module.exports = comment;