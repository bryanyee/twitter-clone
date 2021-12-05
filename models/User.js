const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  tweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
