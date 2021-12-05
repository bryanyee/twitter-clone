require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const connectDb = require("./connectDb");

connectDb();

const server = new ApolloServer({ typeDefs, resolvers });

// TODO: Add server listener after setting db connection
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
