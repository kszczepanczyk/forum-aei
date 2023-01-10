const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  idPost: {
    type: Number,
    unique: true
  },
  user_id: {
    type: Number,
    required: true
  },
  thread_id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  }
});



const Post = mongoose.model('Post', postSchema);

module.exports = Post;