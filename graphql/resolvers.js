const tweets = [
  {
    text: 'Hello world tweet',
    author: {
      username: 'Jack'
    },
    comments: [{
      text: 'Nice!',
    }],
  },
  {
    text: 'Sample tweet',
    author: {
      username: 'Bob'
    },
    comments: [{
      text: 'Ok',
    }],
  },
];

const resolvers = {
  Query: {
    tweets: () => tweets,
  },
};

module.exports = resolvers;