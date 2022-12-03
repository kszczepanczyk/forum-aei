const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
 
   threadId:{
    type: String,
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  userId:{
    type: Number,
    required: true,
  },
  
 // posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  //subForums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subforum' }]
});

const Forum = mongoose.model('Forum', categorySchema);

module.exports = Forum;