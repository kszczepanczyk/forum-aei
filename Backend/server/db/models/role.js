const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  idUser:{
    type: Number,
    required: true,
  },
  roleName:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  }
});

const role = mongoose.model('role', roleSchema);

module.exports = role;