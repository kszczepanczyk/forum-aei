const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  idUser: {
    type: Int,
    required: true,
  },
  username: {
    type: String,
    required: true,
    min: 4
  },
  email: {
    type: String,
    required: true
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

userSchema.pre('save', async function encrypt(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(user.password, salt);
  user.password = hashPassword;
  return next();
});

userSchema.methods.comparePassword = function compare(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('user', userSchema);