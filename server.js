const {ApolloServer} = require('apollo-server');

// A map of functions which returns data for the schema
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(` Server ready at ${url}`)
})
