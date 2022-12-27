const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  idThread: {
    type: Number,
    unique: true
  },
  subjectName: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: Number,
    required: true,
  }
});



const category = mongoose.model('category', categorySchema);

module.exports = category;