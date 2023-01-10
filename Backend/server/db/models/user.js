// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   idUser: {
//     type: Number,
//     unique: true
//   },
//   username: {
//     type: String,
//     required: true,
//     min: 4
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   rank: {
//     type: String,
//     required: false,
//     default: null
//   },
//   date_joined: {
//     type: Date,
//     default: Date.now
//   }
// });


// const UserModel = mongoose.model('UserModel', UserSchema);

// module.exports = UserModel;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  idUser: {
    type: Number,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    min: 4
  },
  rank: {
    type: String,
    required: true,
    default: null
  },
  date_joined: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true
  }
});



const User = mongoose.model('User', userSchema);

module.exports = User;