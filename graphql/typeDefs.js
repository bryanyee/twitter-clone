const { gql } = require('apollo-server');

const typeDefs = gql`
  type Tweet {
    text: String
    author: User
    comments: [Comment]
  }

  type User {
    username: String
  }

  type Comment {
    text: String
  }

  type Query {
    tweets: [Tweet]
  }
`;

module.exports = typeDefs;
