const mongoose = require('mongoose');
//schema
const UserSchema = new mongoose.Schema({
    idUser: {
      type: Number,
      required: true,
      validate(value){
        if(value < 0)
            throw new Error('id mniejsze niz zero nie moze byc')
      },
      unique: true
    },
    username: {
      type: String,
      required: true,
      min: 4
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    rankId: {
      type: String,
      required: false,
      
      default: null
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

//model
const UserModel = mongoose.model('user', UserSchema);


module.exports = UserModel;