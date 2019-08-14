const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');

cosnt server = new ApolloServer({typeDefs});