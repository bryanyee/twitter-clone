const Tweet = require('../models/Tweet');

const resolvers = {
  Query: {
    tweets: () => Tweet.getFeed(),
  },
};

module.exports = resolvers;