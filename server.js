const {ApolloServer, gql} = require('apollo-server');

// The GraphQL Schema
const typeDefs = gql`
    type Query{
        "A simple type for getting started!"
        hello: String
    }
`;

// A map of functions which returns data for the schema
const resolvers = {
  Query {
    hello: () => 'world',
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(` Server ready at ${url}`)
})
