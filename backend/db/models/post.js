const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  idPost: { 
    type:Number,
    required:true,
  },
  userId: { 
    type:Number,
    required:true
  },
  threadId: { 
    type:String,
    required:true
  },
  title:{
    type: String,
    required: true
  },
  //subForum: { type: mongoose.Schema.Types.ObjectId, ref: 'Subforum' },
  content:{
    type:String,
    required:true
  },
  //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  //replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
  likes: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;