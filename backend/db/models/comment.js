const mongoose = require('mongoose');

// A post reply always belongs to a post and to a user
const replySchema = new mongoose.Schema({
    replyId:{
    type:Number,
    required:true
  },
  postId:{
    type:Number,
    required:true
  },
    content:{
    type:String,
    required:true
  },
  data:{
    type: Date,
    default: Date.now
  },


  //post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Reply = mongoose.model('comment', replySchema);

module.exports = Reply;