const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

tweetSchema.statics.getFeed = () => tweets;

const Tweet = mongoose.model('Comment', tweetSchema);

const tweets = [
  {
    text: 'Hello world tweet',
    author: {
      username: 'Jack'
    },
    comments: [
      {
        text: 'Nice!',
      },
      {
        text: 'Second comment.',
      },
    ],
  },
  {
    text: 'Today is Saturday.',
    author: {
      username: 'BobRocks'
    },
    comments: [{
      text: 'Ok',
    }],
  },
];

module.exports = Tweet;
